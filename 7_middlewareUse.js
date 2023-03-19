const express = require('express');
const app = express();
const port = 3000;
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

// app.use([authorize, logger]);
//static is inbuilt middleware
// app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/api/product', (req, res) => {
    res.send("Product Page");
});

app.get('/api/items', [logger, authorize], (req, res) => {
    res.send("Items Page");
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});