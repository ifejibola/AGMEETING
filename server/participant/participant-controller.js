var express = require("express");
var router = express.Router();
const Participant = require("./models/participant");
const server = require("../server");
const passport = require("passport");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got participants");
});

router.get(
  "/meetingParticipants",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    jwt = server.getJwt(req);
    if (!jwt.user.is_mod) {
      res.status(401);
      return;
    }
    Participant.findAll({
      where: {
        moderator_id: jwt.user.id,
      },
    })
      .then((users) => {
        console.log(users);
        res.send(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  }
);

router.delete(
  "/deleteParticipant",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    jwt = server.getJwt(req);
    Participant.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then((users) => {})
      .catch((err) => {
        res.status(400).send(err);
      });
  }
);

module.exports = router;
