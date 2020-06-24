//Respond with the json for a random reservation
const reservations = require("../data/reservations.json");

module.exports = (req, res) => {
  res.json(reservations[Math.floor(Math.random() * reservations.length)]);
};