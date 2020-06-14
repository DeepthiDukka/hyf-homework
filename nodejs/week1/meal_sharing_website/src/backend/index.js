const express = require("express");
const app = express();

// Modular routes:

const mealsRouter = require("./routes/meals.js");
app.get("/meals", mealsRouter);

const cheapMealRouter = require("./routes/cheapMeals.js");
app.get("/cheap-meals", cheapMealRouter);

const largeMealRouter = require("./routes/largeMeals.js");
app.get("/large-meals", largeMealRouter);

const randomMealRouter = require("./routes/meal.js");
app.get("/meal", randomMealRouter);

const reservationsRouter = require("./routes/reservations.js");
app.get("/reservations", reservationsRouter);

const randomReservationRouter = require("./routes/reservation.js");
app.get("/reservation", randomReservationRouter);

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});