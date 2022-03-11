var express = require("express");
var router = express.Router();
const Administrator = require("./models/Administrator");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got administrators");
});

module.exports = router;
