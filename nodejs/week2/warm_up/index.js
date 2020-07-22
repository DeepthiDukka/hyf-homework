//Lets use express routes to create a small calculator:

const express = require("express");
const app = express();
const port = 3000;

app.get('/numbers/add', (req, res) => {
    let sum = Number(req.query.first) + Number(req.query.second);
    res.send(`${sum}`);
});

// http://localhost:3000/numbers/add?first=3&second=7    //10

app.get('/numbers/sub', (req, res) => {
    let sub = Number(req.query.first) - Number(req.query.second);
    res.send(`${sub}`);
});


// http://localhost:3000/numbers/sub?first=7&second=3    //4

app.get('/numbers/multiply/:first/:second', (req, res) => {
    let product = Number(req.params.first) * Number(req.params.second);
    res.send(`${product}`);
});

// http://localhost:3000/numbers/multiply/3/5    //15

app.get('/numbers/divide/:first/:second', (req, res) => {
    let divide = Number(req.params.first) / Number(req.params.second);
    res.send(`${divide}`);
});

// http://localhost:3000/numbers/divide/15/5
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});