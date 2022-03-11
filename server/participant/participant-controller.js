var express = require("express");
var router = express.Router();
const Participant = require("./models/participant");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got participants");
});

module.exports = router;
