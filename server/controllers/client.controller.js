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

  const userWithId = await client.findOne({ where: { id: req.params.userId }}).catch((err) => {
    console.log("Error: ", err);
  });;

  if(!userWithId){
    return res.json({message: "User with that id not exists"});
  };

  return res.json({ user: userWithId});

})

router.post("/update/users/:userId", passport.authenticate("jwt", {session: false} ), async(req, res) =>{

  const userWithId = await client.findOne({ where: { id: req.params.userId }}).catch((err) => {
    console.log("Error: ", err);
  });

  if(!userWithId){
    return res.json({message: "User with that id not exists"});
  };

  const { email, password, name, role } = req.body;

  let values = {};
  // if values at the field exist add them to update, else ignore
  if(name){
    values.client_name = name;
  }
  if(email){
    values.email = email;
  }
  if(password){
    values.password = password;
  }
  if(role){
    values.role = role;
  }
  // Update the user
  let message = "Successfully update the user";
  await client.update(
      values,
      {where: {id: req.params.userId}}
  ).catch((err) => {
    console.log("Error: ", err);
    message = "An error occurred in the server. Please try again later."
  });

  return res.json({ message: message});

})

module.exports = router;