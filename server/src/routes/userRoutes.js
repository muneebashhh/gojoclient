const express = require("express");

const userRouter = express.Router();

userRouter.post("/register",(req,res)=>{
    console.log("Register controller yet to make")
})
userRouter.post("/login",(req,res)=>{
    console.log("Login controller yet to make")
})

module.exports = userRouter;