const express = require("express");
const router = express.Router();
const client = require("../models/client");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/login", async(req, res) =>{

    const { email, password } = req.body;

    const userWithEmail = await client.findOne({where : { email }}).catch((err)=> {
        console.log("Error: ", err);
    })

    if(!userWithEmail){
        return res.json({message: "Email or password does not match!"});
    };

    if(userWithEmail.password !== password){
        return res.json({message: "Email or password does not match"});
    }

    const jwtToken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({ message: "Welcome back! ", token: jwtToken, user: userWithEmail});
})


module.exports = router;