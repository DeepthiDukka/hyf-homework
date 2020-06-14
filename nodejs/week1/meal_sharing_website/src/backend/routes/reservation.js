//Respond with the json for a random reservation

const express = require("express");
const router = express();

const reservations = require("../data/reservations.json");

/*
const fs = require("fs");
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

router.get("/reservation", (req, res) => {
  res.json(reservations[Math.floor(Math.random() * reservations.length)]);
}); */

router.use("/", (req, res) => {
  res.json(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = router;