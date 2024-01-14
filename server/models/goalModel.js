const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: Number,
  points: Number,
});

module.exports = mongoose.model("Goal", GoalSchema);
