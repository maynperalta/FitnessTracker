const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });

});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body}},
        { new: true, runValidators: true })
        .then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({ query }, res) => {
    Workout.find({}).limit(7)
        .then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.status(400).json(err);
        });
});

// router.delete("/api/workouts", ({ body }, res) => {
//     Workout.findByIdAndDelete(body.id)
//         .then(() => {
//             res.json(dbWorkouts);
//         }).catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;