const express = require("express");
const {
  getGoals,
  getGoal,
  addGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.get("/", getGoals);
router.post("/", addGoal);

router.get("/:id", getGoal);
router.delete("/:id", deleteGoal);
router.put("/:id", updateGoal);

module.exports = router;
