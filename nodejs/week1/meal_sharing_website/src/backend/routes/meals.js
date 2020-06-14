//Respond with the json for all the meals.
//For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 
//For meals that do not have any reviews, the "reviews" property will be an empty array.

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

app.get('/meals', (req, res) => {
	res.json(mealReview);
}); */

router.use("/", (req, res) => {
	res.json(mealReview);
});

module.exports = router;