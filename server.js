//Required dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Ports for local host and deploying to Heroku
const PORT = process.env.PORT || 3000;

const app = express();


//Middleware for json parsing and access to the 'public' folder
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connect to MongoDB for database updates/retrieval
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    console.log(err);
  }
);

//Express routes for HTML and API routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
