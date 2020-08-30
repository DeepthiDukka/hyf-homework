//Respond with the json for a random reservation

const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
  const reservationId = parseInt(req.params.id);
  const reservationOutput = reservations.filter((item) => item.id == (reservationId));
  res.json(reservationOutput);
});

router.get("/", (req, res) => {
  res.json(reservations);
});

module.exports = router;