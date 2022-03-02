var express = require("express");
var router = express.Router();
const Participant = require("../participant/models/participant");
const Admin = require("../admin/models/Administrator");
const Moderator = require("../moderator/models/Moderator");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("../../config/passport");

router.get("/", (req, res) => {});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(info);
    if (err) throw err;
    if (!user) res.send("No user");
    else {
      req.logIn(user, (err) => {
        if (err) {
          return;
        }
        res.send(user);
      });
    }
  })(req, res, next);
});

router.post("/register", (req, res) => {
  Moderator.findOne({ where: { email: req.body.email } })
    .then(async (results) => {
      if (!results) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        Moderator.create({
          email: req.body.email,
          password: hashedPassword,
        }).then((moderator) => {
          res.send(moderator);
        });
      } else {
        res.send("failure");
      }
    })
    .catch((err) => {
      res.send("failure");
      console.log(err);
    });
});

module.exports = router;
