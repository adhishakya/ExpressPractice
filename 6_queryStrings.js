const express = require('express');
const app = express();
const { products } = require("./data")

const port = 5000;

app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1><br><a href = "/api/products">Products</a>`)
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        res.status(404).send("Page not found");
    }
    res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send("No products with the requirements matched");
        return res.status(200).json({ success: true, data: {} })
    }
    res.status(200).json(sortedProducts);
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
