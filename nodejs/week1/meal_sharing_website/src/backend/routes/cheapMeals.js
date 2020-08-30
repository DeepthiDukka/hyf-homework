const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const mealReview = meals.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviews.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

module.exports = (req, res) => {
	const filter = mealReview.filter(meal => meal.price <= 100);
	res.json(filter);
};
