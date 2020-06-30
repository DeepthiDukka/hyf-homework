const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

router.get("/", async function (req, res) {
  const totalReservations = await knex.select("*").table("reservation");
  res.send(totalReservations);
});

// http://localhost:3000/api/reservations

router.post("/", async function (req, res) {
  const newReservation = {
    "id": req.body.id,
    "number_of_guests": req.body.number_of_guests,
    "meal_id": req.body.meal_id,
    "created_date": req.body.created_date
  }
  await knex("reservation").insert(newReservation);
  res.send("The new reservation has been added");
});

//http://localhost:3000/api/reservations?number_of_guests=5&meal_id=4&created_date=2020-06-27

router.get("/:id", async function (req, res) {
  const thisReservationId = await knex("reservation").where({
    "id": req.params.id
  });
  res.send(thisReservationId);
});

//http://localhost:3000/api/reservations/1

router.put("/:id", async function (req, res) {
  const thisId = await knex("reservation")
    .where({
      "id": req.params.id
    })
    .update({
      "title": req.query.title
    });
  res.send('this has been updated');
});

// http://localhost:3000/api/reservations/5?number_of_guests=5

router.delete("/:id", async function (req, res) {
  const deleteId = await knex("reservation")
    .where({
      "id": req.params.id
    }).del();
  res.send(`Reservation with id ${id} was deleted`);
});

module.exports = router;