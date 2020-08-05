const express = require("express");
const router = express.Router();
const knex = require("../database");
const app = express();
//GET api/meals/ query parameters
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit
  } = req.query;
  const queriedMeals = await knex.select("*").table("meal");

  const requestHasNoQueryParameters = Object.keys(req.query).length === 0;
  if (requestHasNoQueryParameters ) {
  
    res.send(queriedMeals);

  }

  if (maxPrice) {
    try {

      const maxPriceMeals = await knex.select("*").table("meal")
        .where("price", "<", maxPrice);
      console.log(maxPriceMeals);
      res.json(maxPriceMeals);
    } catch (error) {
      res.send("error");
    }
  } else if (title) {
    try {

      const queriedMeals = await knex.select("*").table("meal")
        .where("title", "like", `%${title}%`);
      console.log(queriedMeals);
      res.send(queriedMeals);
    } catch (error) {
      res.send("error");
    }
  } else if (availableReservations === 'true') {
    try {
      
      const availableReservationsMeals = await knex.select("*")
        .sum({
          sumTotal: "reservation.number_of_guests"
        })
        .table("meal")
        .join("reservation", {
          "meal.id": "reservation.meal_id"
        })
        .groupBy("meal.title")
        .having("sumTotal", ">", "max_reservations")
      console.log(availableReservationsMeals);
      res.send(availableReservationsMeals);

    } catch (error) {
      res.send("error");
    }
  } else if (createdAfter) {
    try {

      const mealCreatedDate = await knex.select("*").table("meal")
        .where("created_date", "<", createdAfter);
      console.log(mealCreatedDate);
      res.send(mealCreatedDate);
    } catch (error) {
      res.send("error");
    }
  } else if (limit) {
    try {

      const limitMeals = await knex.select("*").table("meal")
        .limit(limit);
      console.log(limitMeals);
      res.send(limitMeals);
    } catch (error) {
      res.send("error");
    }
  }
});


// http://localhost:3000/api/meals

router.post("/", async function (req, res) {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date
  } = (req.body);
  
  await knex("meal").insert(req.body);
  res.send("The new meal has been added");
});


router.get("/:id", async function (req, res) {
  const getMealWithId = await knex("meal").where({
    "id": req.params.id
  });
  res.send(getMealWithId);
});

//http://localhost:3000/api/meals/1

router.put("/:id", async function (req, res) {
  const UpdateMealId = await knex("meal")
    .where({
      "id": req.params.id
    })
    .update({
      "title": req.query.title
    });
  res.send(`this meal ${UpdateMealId} has been updated `);
});

// http://localhost:3000/api/meals/5?title=delicious-homemade-food

router.delete("/:id", async function (req, res) {
  const deleteMealId = await knex("meal")
    .where({
      "id": req.params.id
    }).del();
  res.send(`Meal with id ${deleteMealId} was deleted`);
});


module.exports = router;
//http://localhost:3000/api/meals?createdAfter=2020-06-28
//http://localhost:3000/api/meals?availableReservations=true