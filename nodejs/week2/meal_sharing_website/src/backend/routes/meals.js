const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

//Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
	const mealsId = parseInt(req.params.id);
	const mealsIdOutput = meals.filter((item) => item.id == mealsId);
	mealsIdOutput.length > 0 ? res.json(mealsIdOutput) : res.status(404).send(`Error: Unable to fetch the request`);
});

//http://localhost:8080/meals/1

//Get meals that has a price smaller than maxPrice
router.get("/", (req, res) => {
	let meal;
	const maxPrice = parseFloat(req.query.maxPrice);
	const title = req.query.title;
	const date = parseInt(req.query.createdAfter);
	const limit = parseInt(req.query.limit);

	if (maxPrice) {
		meal = meals.filter((item) => item.price <= maxPrice);
	} else if (title) {
		meal = meals.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
	} else if (date) {
		meal = meals.filter((item) => Date.parse(item.createdAt) > Date.parse(date));
	} else if (limit >= 0) {
		meal = meals.slice(0, limit);
	} else {
		return res.json(meals)
	}
	meal.length > 0 ? res.json(meal) : res.status(404).send(`Error: Unable to fetch the request`);
});

module.exports = router;

// http://localhost:8080/meals?maxPrice=400
// http://localhost:8080/meals?createdAfter=2019-04-05
// http://localhost:8080/meals?limit=1
// http://localhost:8080/meals?title=Indian%20food