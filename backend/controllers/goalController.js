
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res)=>{
    res.status(200).json({meesage: 'Get Goals'})
}

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res)=>{
    res.status(200).json({meesage: 'Set Goal'})
}

// @desc    Update goals
// @route   PUT /api/goals
// @access  Private
const updateGoal = (req,res)=>{
    res.status(200).json({meesage: `Update Goal ${req.params.id}`})
}

// @desc    Delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req,res)=>{
    res.status(200).json({meesage: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}