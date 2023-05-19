const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} =require('../Controllers/workoutController')


// Get all workouts
    router.get('/',getWorkouts);

// Get single workout
    router.get('/:id', getWorkout);

// Create new workout
    router.post('/', createWorkout);

// Delete workout
    router.delete('/:id', deleteWorkout);

// Update workout
    router.patch('/:id',updateWorkout);

module.exports = router;
