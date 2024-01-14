const Goal = require("../models/goalModel");
const mongoose = require("mongoose");

const getGoals = async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
};

const getGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);
  res.status(200).json(goal);
};

const addGoal = async (req, res) => {
  const { title, priority, points } = req.body;

  try {
    const goal = await Goal.create({
      title,
      priority,
      points,
    });

    res.status(200).json(goal);
  } catch {
    res
      .status(404)
      .json({ error: `Error made in code! ---" ${error.message}` });
  }
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findByIdAndDelete({ _id: id });
  res.status(200).json(goal);
};

const updateGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findByIdAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(goal);
};

module.exports = { getGoals, getGoal, addGoal, deleteGoal, updateGoal };
