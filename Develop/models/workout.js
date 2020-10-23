const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {type: Date, default: new Date()},
  exercises: [
    {
      type: {type: String, required: true},
      name: {type: String, required: true},
      duration: {type: Number, required: true},
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;