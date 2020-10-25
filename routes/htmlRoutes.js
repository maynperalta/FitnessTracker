//required dependencies
const path = require("path");
const router = require("express").Router();

//Route to the home (index) page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

//Route to the exercise page to enter exercise data
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Route to the stats page to see statistics and graphs/charts
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;