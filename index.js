// configure dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// self configure
const routeWorkOut = require("./routes/workout");
const userRoutes = require("./routes/user");

// configure
app.use(express.json());
// ini untuk midlewaree agar tidak undefind karena default post adalah undefined
// app.use(express.urlencoded({ extended: true }));
// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", routeWorkOut);
app.use("/api/user", userRoutes);

// connect do mongoodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // run server
    app.listen(process.env.PORT, () => {
      console.log(`Your App is Listening on port`, process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
