const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
}

const express = require("express");
// var fallback = require('express-history-api-fallback')
const app = express();
const port = process.env.PORT || 3000;

// import routes from "../client/routes";
const indexRoutes = require("./controllers/index.controller");
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const db = require("../models");

const Participant = require("./participant/models/participant");

const participantController = require("./participant/participant-controller");

const meetingController = require("./meeting/meeting-controller");

const itemController = require("./item/item-controller");

const administratorController = require("./admin/admin-controller");

const authController = require("./auth/authController");

const chatController = require("./chat/chat-controller");

const session = require("express-session");

const cookieParser = require("cookie-parser");

const io = require("./socket");

const jwtDecode = require("jwt-decode");

// After you declare "app"
app.use(
  session({ secret: "some-secret", resave: false, saveUninitialized: true })
);

app.use(cookieParser("some-secret"));

//passport
const passport = require("passport");
require("../config/passport");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use("/participants", participantController);
app.use("/meetings", meetingController);
app.use("/items", itemController);
app.use("/admins", administratorController);
app.use("/authentication", authController);
app.use("/chat", chatController);
//passport
app.use(passport.initialize());
app.use(passport.session());

try {
  db.sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    Participant.findAll().then((results) => {});
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// app.use(express.static("helper"));
// app.use("/", indexRoutes)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });

  // do not use this
  // res.sendFile(path.join(__dirname + '/public/index.html'))
});

db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
  });
});

const getJwt = (req) => {
  let jwt = jwtDecode(req.get("Authorization").split(" ")[1]);
  return jwt;
};

exports.getJwt = getJwt;

module.exports = app;
