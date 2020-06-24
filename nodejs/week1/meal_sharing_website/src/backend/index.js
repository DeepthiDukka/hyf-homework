const express = require("express");
const app = express();

// Modular routes:

const mealsRouter = require("./routes/meals.js");
const cheapMealRouter = require("./routes/cheapMeals.js");
const largeMealRouter = require("./routes/largeMeals.js");
const randomMealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations.js");
const randomReservationRouter = require("./routes/reservation.js");

app.get("/meals", mealsRouter);
app.get("/cheap-meals", cheapMealRouter);
app.get("/large-meals", largeMealRouter);
app.get("/meal", randomMealRouter);
app.get("/reservations", reservationsRouter);
app.get("/reservation", randomReservationRouter);

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});