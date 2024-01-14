const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const goalRoutes = require("./routes/goalRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/goal-tracker");

app.use(cors());
app.use(express.json());

app.use("/api/goals", goalRoutes);

app.listen(6060, () => {
  console.log("Server listening on 6060 --- Goal Tracker!");
});
