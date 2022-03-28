const express = require("express");
const router = express.Router();
const client = require("../models/client");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const alreadyExistedUser = await client
    .findOne({ where: { email } })
    .catch((err) => {
      console.log("Error: ", err);
    });

  if (alreadyExistedUser) {
    return res.json({ message: "User with email already exists!" });
  }

  const newUser = new client({ email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot register user at the moment" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
});

module.exports = router;
