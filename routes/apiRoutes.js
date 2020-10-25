//Required dependencies
const router = require("express").Router();
const db = require("../models/workout");

//Post a new workout to the workout database
router.post("/api/workouts", (req, res) => {
    db.create({ type: "workout" })
    .then(workout => {
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });

});

//Add exercise to a workout.
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body }},
        { new: true, runValidators: true })
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

//Retrieve the last workout
router.get("/api/workouts", (req, res) => {
    db.find({})
    .then(workout => {
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//Add workout data to the stats page
router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(7)
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

//Export module
module.exports = router;
