//Respond with the json for all reservations

const express = require("express");
const router = express();

const reservations = require("../data/reservations.json");

// Used fs just for reference:
/*const fs = require("fs");
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json")); 

router.get("/reservations", (req, res) => {
    res.json(reservations);
}); */

router.use("/", (req, res) => {
    res.json(reservations);
});

module.exports = router;