import express from 'express';
import {connectToDB} from './src/config/db.js';

const app = express();

async function startServer(){
    try{
        console.log("Starting server...");
        const db = await connectToDB();
        console.log("Starting server...");

        app.get("/", async (req, res) => {
            const users = await db.collection("User").find().toArray();
            res.json(users);
        });

        app.listen(5000, (req, res) => {
            console.log("SERVER running on PORT 5000");
        });
    }catch(error){
        console.log("Error in connectToDB || connectToSERVER");
    }
}

startServer();
