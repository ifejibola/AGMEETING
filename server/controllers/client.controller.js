const express = require("express");
const router = express.Router();
const client = require("../models/client");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/users", async(req, res) =>{

  const { email, name, password } = req.body;

  const userWithEmail = await client.findOne({where : { email }})

  if(userWithEmail){
    return res.json({message: "User with that email already exists"});
  };

  await client.create({
    email: email,
    name: name,
    password: password
  });

  return res.json({ message: "New user created!"});

})



module.exports = router;