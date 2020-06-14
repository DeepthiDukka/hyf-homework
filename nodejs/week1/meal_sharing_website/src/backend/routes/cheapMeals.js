const express = require("express");
const router = express();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const mealReview = meals.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviews.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

/* const fs = require('fs');
const mealFile = fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8');
const reviewFile = fs.readFileSync(__dirname + '/../data/reviews.json', 'utf-8');
const reviewParsedFile = JSON.parse(reviewFile);
const mealParsedFile = JSON.parse(mealFile);
const mealReview = mealParsedFile.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviewParsedFile.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

app.get('/cheap-meals', (req, res) => {
	const filter = mealReview.filter(meal => meal.price <= 100);
	res.json(filter);
}); */

router.use("/", (req, res) => {
	const filter = mealReview.filter(meal => meal.price <= 100);
	res.json(filter);
});
module.exports = router;