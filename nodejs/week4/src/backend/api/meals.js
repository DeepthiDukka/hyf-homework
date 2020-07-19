const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async function(req, res) {
  const meals = await knex("meal").select("*");
//res.json(meals);
	const mealsId = parseInt(req.params.id);
  const mealsIdOutput = meals.filter((item) => item.id == mealsId);
  console.log(mealsIdOutput);
  mealsIdOutput.length > 0 ? res.json(mealsIdOutput) : res.status(404).send(`Error: Unable to fetch the request`);
  
});

module.exports = router;
