const express = require('express')
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController')


const router = express.Router()

// Get all the workouts
router.get('/', getWorkouts)

// GET a single workout by ID
router.get('/:id', getWorkout)

// POST a new workout 
router.post('/', createWorkout)

// DELETE a workout 
router.delete('/:id', deleteWorkout)

// PATCH (update) a workout
router.patch('/:id', updateWorkout)


// Export the router
module.exports = router