var express = require("express");
const { default: jwtDecode } = require("jwt-decode");
var router = express.Router();
const passport = require("passport");
const Message = require("./models/message");

// respond with "hello world" when a GET request is made to the homepage
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send("got messages");
  }
);

router.get(
  "/roomMessages",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("here in messages");
    let jwt = jwtDecode(req.get("Authorization").split(" ")[1]);
    console.log(jwt.user.moderator_id);
    Message.findAll({
      where: {
        moderator_id: jwt.user.moderator_id,
      },
    })
      .then((messages) => {
        res.status(200).send(messages);
      })
      .catch((err) => {
        res.status(400);
      });
  }
);

module.exports = router;
