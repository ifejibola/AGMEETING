const express = require("express");
const router = express.Router();
const client = require("../models/client");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/users", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

  const allUsers = await client.findAll().catch((err)=> {
    console.log("Error: ", err);
  });

  if(!allUsers){
    return res.json({message: "User with that email not exists"})
  };

  return res.json({ users: allUsers});

})

router.get("/users/:userId", passport.authenticate("jwt", {session: false} ), async(req, res) =>{

  const userWithId = await client.findOne({ where: { id: req.params.userId }});

  if(!userWithId){
    return res.json({message: "User with that id not exists"});
  };

  return res.json({ user: userWithId});

})

module.exports = router;