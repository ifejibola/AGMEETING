var express = require("express");
var router = express.Router();
const Participant = require("../participant/models/participant");
const Admin = require("../admin/models/Administrator");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("../../config/passport");
const jwt = require("jsonwebtoken");
require("dotenv");
const session = require("express-session");

router.get("/", (req, res) => {});

router.get(
  "/verifyToken",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("here");
    res.send("success");
  }
);

router.post("/refreshToken", (req, res) => {
  console.log(req.body);
  let refreshToken = req.body.refreshToken;
  refreshToken = jwt.decode(refreshToken);
  let { exp } = refreshToken;
  console.log(Date.now(), exp * 1000, Date.now() > exp * 1000);
  if (Date.now() >= exp * 1000) {
    return res.status(401).send();
  }
  const newAccessToken = jwt.sign(
    { userId: req.body.user.id },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "4w" }
  );
  return res.json({ accessToken: newAccessToken });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user");
    else {
      req.logIn(user, { session: false }, (err) => {
        if (err) {
          return;
        }
        const body = {
          id: user.id,
          email: user.email,
          isMod: user.isMod,
          moderatorId: user.moderatorId,
        };
        const accessToken = jwt.sign(
          { user: body },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "4w" }
        );
        const refreshToken = jwt.sign(
          { userId: user.id },
          process.env.REFRESH_TOKEN_KEY,
          { expiresIn: "4w" }
        );
        return res.json({ accessToken, refreshToken });
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
          const accessToken = jwt.sign(
            { user: body },
            process.env.ACCESS_TOKEN_KEY,
            { expiresIn: "4w" }
          );
          const refreshToken = jwt.sign(
            { userId: user.id },
            process.env.REFRESH_TOKEN_KEY,
            { expiresIn: "4w" }
          );
          res.json({ participant, accessToken, refreshToken });
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
