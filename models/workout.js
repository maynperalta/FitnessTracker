const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {type: Date, default: new Date()},
  exercises: [
    {
      type: {type: String, trim: true, required: true},
      name: {type: String, trim: true, required: true},
      duration: {type: Number, required: true},
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
},
{
  toJSON: {
    virtuals: true
  }
});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;