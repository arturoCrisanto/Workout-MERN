const Workout = require('../Models/workout');
const mongoose= require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
        } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        }
    };

// get single workout
const getWorkout = async (req, res) => {
        try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: "No such workout"})
        }
        const workout = await Workout.findById(id);
        if (!workout) {
        return res.status(404).json({ error: "No such workout" });
        }
        res.status(200).json({ workout });
        
        } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        }
    };

// create a new workout 
const createWorkout =async (req, res) => {
    const { title, reps, load } = req.body;
    // add json data to DB
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete workout
const deleteWorkout = async (req, res) => {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
        }
    
        try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "No such workout" });
        }
        res.status(200).json({ workout });
        } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        }
    };

// update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
        }
    const workout= await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout)
}

module.exports ={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout

}