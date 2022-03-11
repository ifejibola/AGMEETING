var express = require("express");
var router = express.Router();
const Meeting = require("./models/meeting");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got meetings");
});

module.exports = router;
