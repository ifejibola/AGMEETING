var express = require("express");
var router = express.Router();
const Meeting = require("./models/meeting");
const passport = require("passport");

// respond with "hello world" when a GET request is made to the homepage
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send("got meetings");
  }
);

module.exports = router;
