import express from "express";
import jwt from "jsonwebtoken";
import {jwtAuth} from "./src/middleware/jwtAuth.js"

const app = express();
app.use(express.json());
async function startServer(){
    try{
        app.post("/login", (req, res)=>{
            const {email, password} = req.body;
            if(email == "user1@gmail.com" && password == "test@123"){
                console.log("User Login");
                const token = jwt.sign({email}, "secret", {expiresIn: "1h"});
                return res.json({token});
            }
            res.status(401).send("Invalid");
        })

        app.get("/profile", jwtAuth, (req, res) => {
            res.send("Welcome user");
        });

        app.listen(4000, ()=>{
            console.log("SERVER running on port 4000");
        })
    }catch(error){
        console.log(error);
    }
}

startServer();