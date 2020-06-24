//Respond with the json for a random meal (including it's reviews)
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const mealReview = meals.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviews.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

module.exports = (req, res) => {
	res.json(mealReview[Math.floor(Math.random() * mealReview.length)]);

};