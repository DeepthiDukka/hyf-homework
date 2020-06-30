const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

router.get("/", async function (req, res) {
  const totalReviews = await knex.select("*").table("review");
  res.send(totalReviews);
});

// http://localhost:3000/api/reviews

router.post("/", async function (req, res) {
  const newReview = {
    "id": req.params.id,
    "title": req.query.title,
    "description": req.query.description,
    "meal_id": req.query.meal_id,
    "stars": req.query.stars,
    "created_date": req.query.created_date
  }
  await knex("review").insert(newReview);
  res.send("The given review has been added");
});

//http://localhost:3000/api/reviews?title=russian&description=super&meal_id=6&stars=5&created_date=2020-06-27

router.get("/:id", async function (req, res) {
  const thisReviewId = await knex("review").where({
    "id": req.params.id
  });
  res.send(thisReviewId);
});

router.put("/:id", async function (req, res) {
  const thisId = await knex("review")
    .where({
      "id": req.params.id
    })
    .update({
      "title": req.query.title
    });
  res.send('this has been updated');
});

// http://localhost:3000/api/reviews/5?title=simply-superb

router.delete("/:id", async function (req, res) {
  const thisId = await knex("review")
    .where({
      "id": req.params.id
    }).del();
  res.send(`Review with id ${id} was deleted`);
});

module.exports = router;