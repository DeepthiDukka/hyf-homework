const express = require("express");
const app = express();

// routes:

const mealsRoute = require("./routes/meals.js");
const reservationsRoute = require("./routes/reservations.js");
const reviewsRoute = require("./routes/reviews.js");

app.use("/meals", mealsRoute);
app.use("/reservations", reservationsRoute);
app.use("/reviews", reviewsRoute);

app.listen(8080, () => {
    console.log("Server is listening to port 8080")
});