const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//setting up static and middleware
app.use(express.static(path.resolve("./public")));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
});

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});