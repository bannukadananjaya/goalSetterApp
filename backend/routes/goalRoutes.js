const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get('/',getGoals)
// router.post('/',setGoals)
router.route("/").get(getGoals).post(setGoals);

// router.put('/:id', updateGoals)
// router.delete('/:id',deleteGoals)
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
