//Respond with the json for all reservations
const reservations = require("../data/reservations.json");

module.exports = (req, res) => {
    res.json(reservations);
};