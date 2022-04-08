var express = require("express");
const { default: jwtDecode } = require("jwt-decode");
var router = express.Router();
const passport = require("passport");
const Message = require("./models/message");
const server = require("../server");
const Participant = require("../participant/models/participant");

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
    let jwt = server.getJwt(req);
    Message.findAll({
      where: {
        moderator_id: jwt.user.moderator_id,
      },
      include: [
        {
          model: Participant,
        },
      ],
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
