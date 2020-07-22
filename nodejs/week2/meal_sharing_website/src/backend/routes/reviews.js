const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

//Respond with the json for the review with the corresponding id

router.get("/:id", (req, res) => {

    const reviewId = parseInt(req.params.id);
    const matchedIdReview = reviews.filter((review) => review.id == (reviewId));
    res.json(matchedIdReview);

});

//Respond with the json for all reviews:
router.get("/", (req, res) => {
    res.json(reviews);
});

module.exports = router;

//http://localhost:8080/reviews

//http://localhost:8080/reviews/2