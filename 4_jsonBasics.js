const express = require("express");
const app = express();

const { products } = require("./data.js");

const port = 5000;

app.get('/', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});