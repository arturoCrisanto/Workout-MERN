require("dotenv").config()

const express = require ("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts")


// Config
const app = express();

//middleware
app.use(express.json());
app.use((req,res,next )=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts",workoutRoutes )

// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // lsiter to port number
        app.listen(process.env.PORT, ()=> {
            console.log("connected to db and listening on port ", process.env.PORT);
});

})
.catch((error)=>{
    console.log(error)
})
