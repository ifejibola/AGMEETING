var express = require("express");
var router = express.Router();
const Participant = require("../participant/models/participant");
const Admin = require("../admin/models/Administrator");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("../../config/passport");
const jwt = require("jsonwebtoken");
require("dotenv");

router.get("/", (req, res) => {});

router.post("/login", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user");
    else {
      req.logIn(user, { session: false }, (err) => {
        if (err) {
          return;
        }
        const body = { id: user.id, email: user.email, isMod: user.isMod };
        const accessToken = jwt.sign(
          { user: body },
          process.env.ACCESS_TOKEN_KEY
        );
        return res.json({ accessToken });
      });
    }
  })(req, res, next);
});

router.post("/register", (req, res) => {
  Participant.findOne({ where: { email: req.body.email } })
    .then(async (results) => {
      if (!results) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        Participant.create({
          email: req.body.email,
          password: hashedPassword,
          isMod: false,
        }).then((participant) => {
          res.send(participant);
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
