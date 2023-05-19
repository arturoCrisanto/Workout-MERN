const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout
} =require('../Controllers/workoutController')


// Get all workouts
    router.get('/',getWorkouts);

// Get single workout
    router.get('/:id', getWorkout);

// Create new workout
    router.post('/', createWorkout);

// Delete workout
    router.delete('/:id', async (req, res) => {});

// Update workout
    router.patch('/:id', async (req, res) => {});

module.exports = router;
