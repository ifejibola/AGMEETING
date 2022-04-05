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
      attributes: ["id", "email", "is_admin", "is_mod", "moderator_id"],
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

router.post(
  "/deleteParticipant",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    jwt = server.getJwt(req);
    if (!jwt.user.is_mod) {
      res.status(401);
      return;
    }
    Participant.destroy({
      where: {
        id: req.body,
      },
    })
      .then((users) => {
        res.status(200).send("successs");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  }
);

module.exports = router;
