var express = require("express");
var router = express.Router();
const Item = require("./models/Item");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got items");
});

module.exports = router;
