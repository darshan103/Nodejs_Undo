import express from 'express';
import connectDB from './src/config/db.js';
import User from './src/models/User.js';

const app = express();
app.use(express.json());

const db = connectDB()
    .then(()=>{
        app.listen(5000, (req, res) => {
            console.log("SERVER running on PORT 5000");
        });
    })
    .catch((error)=>{
        console.log("Error in connectToDB || connectToSERVER", error);
    })

app.post("/signup", async(req, res)=>{
    try{
        console.log("Data inside body: ", req.body);
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user
        })
    }catch(err){
        res.status(501).json({
            message: "Error creating user",
            err
        })
    }
});
