const express = require("express");
const app = express();

/*
CRUD
Get = Read
Post = Create
Put = Update
Delete = Delete
*/

//app.get
app.get("/", (req, res) => {
    res.send("HomePage");
});

app.get("/about", (req, res) => {
    res.send("About");
});

//app.post

//app.put

//app.delete

//app.all
app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>")
});

//app.use

//app.listen
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on :http://localhost:${port}`);
})