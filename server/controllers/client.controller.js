const express = require("express");
const router = express.Router();
const client = require("../models/client");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got clients");
});

module.exports = router;
