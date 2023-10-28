// configure routes
const express = require("express");

// configure utils
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
// middleware auth
const requireAuth = require("../middleware/requireAuth");
// instance router
const router = express.Router();

// use middleware
router.use(requireAuth);

// routes get all workout
router.get("/", getWorkouts);

// router get single workout
router.get("/:id", getWorkout);

// router post new workout
router.post("/", createWorkout);

// router delete single workout
router.delete("/:id", deleteWorkout);

// router update single workout
router.patch("/:id", updateWorkout);

module.exports = router;
