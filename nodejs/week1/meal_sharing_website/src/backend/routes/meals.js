//Respond with the json for all the meals.
//For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 
//For meals that do not have any reviews, the "reviews" property will be an empty array.
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const mealReview = meals.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviews.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

module.exports = (req, res) => {
	res.json(mealReview);
};