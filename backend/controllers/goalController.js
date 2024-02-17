const asyncHandler =require('express-async-handler')
// @desc Get goals
// @route GET api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc  Set goals
// @route SET api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    
//   res.status(200).json({ message: "Set goals" });
//   console.log(req.body)
  if(!req.body.text){
    res.status(400)
    //.json({message:'Please add a text field'})
    //use express error handler
    throw new Error('Please add a text')
    
  }
  res.status(200).json({message:'Set goal'})
});

// @desc  Update goals
// @route PUT api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}goal` });
});

// @desc Delete goals
// @route DELETE api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}goal` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
