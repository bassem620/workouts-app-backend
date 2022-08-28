require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const workoutRoutes = require("./Routes/workouts");
const userRoutes = require("./Routes/User");

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user/", userRoutes);

// Connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db | Listening in port 4000");
    });
  })
  .catch((error) => console.log(error));
