const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//GET api/meals/ query parameters

router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit
  } = req.query;
  const mealTitles = await knex.select("*").table("meal");

  if (Object.keys(req.query).length === 0) {
    res.send(mealTitles);

  }

  if (maxPrice) {
    try {

      const maxPriceMeals = await knex.select("*").table("meal")
        .where("price", "<", maxPrice);
      console.log(maxPriceMeals);
      res.send(maxPriceMeals);
    } catch (error) {
      error;
    }
  } else if (title) {
    try {

      const titles = await knex.select("*").table("meal")
        .where("title", "like", `%${title}%`);
      console.log(titles);
      res.send(titles);
    } catch (error) {
      error;
    }
  } else if (availableReservations === 'true') {
    try {
      
      const availableReservationsMeal = await knex.select("*")
        .sum({
          sumTotal: "reservation.number_of_guests"
        })
        .table("meal")
        .join("reservation", {
          "meal.id": "reservation.meal_id"
        })
        .groupBy("meal.title")
        .having("sumTotal", ">", "max_reservations")
      console.log(availableReservationsMeal);
      res.send(availableReservationsMeal);

    } catch (error) {
      error;
    }
  } else if (createdAfter) {
    try {

      const datecreated = await knex.select("*").table("meal")
        .where("created_date", "<", createdAfter);
      console.log(datecreated);
      res.send(datecreated);
    } catch (error) {
      error;
    }
  } else if (limit) {
    try {

      const limitMeals = await knex.select("*").table("meal")
        .limit(limit);
      console.log(limitMeals);
      res.send(limitMeals);
    } catch (error) {
      error;
    }
  }
});


// http://localhost:3000/api/meals

router.post("/", async function (req, res) {
  const newMeal = {
    "id": req.body.id,
    "title": req.body.title,
    "description": req.body.description,
    "location": req.body.location,
    "when": req.body.when,
    "max_reservations": req.body.max_reservations,
    "price": req.body.price,
    "created_date": req.body.created_date
  }
  await knex("meal").insert(newMeal);
  res.send("The new meal has been added");
});


router.get("/:id", async function (req, res) {
  const thisMealId = await knex("meal").where({
    "id": req.params.id
  });
  res.send(thisMealId);
});

//http://localhost:3000/api/meals/1

router.put("/:id", async function (req, res) {
  const thisUpdatedMealId = await knex("meal")
    .where({
      "id": req.params.id
    })
    .update({
      "title": req.query.title
    });
  res.send(`this meal ${thisUpdatedMealId} has been updated `);
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