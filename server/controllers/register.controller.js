const express = require("express");
const router = express.Router();
const client = require("../models/client");

router.post("/register", async (req, res) => {


    const {email, password, role, name} = req.body;
    const client_name = name;
    const alreadyExistedUser = await client.findOne({ where: { email }}).catch((err) => {
        console.log("Error: ", err);
    });

    if (alreadyExistedUser){
        return res.json({message: "User with that email already exists!"});

    }

    const newUser = new client({ email, password, role, client_name});
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.json({message: "Error on the server. Please try again later"});
    });

    if(savedUser)
        res.json({message: "Successfully created new user"});
});

module.exports = router;
