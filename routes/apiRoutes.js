const router = require("express").Router();
const db = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    db.create({ type: "workout" })
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });

});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body }},
        { new: true, runValidators: true })
        .then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.find({})
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(7)
        .then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;