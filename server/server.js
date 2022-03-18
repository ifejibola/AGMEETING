const express = require("express");
const morgan = require("morgan");
// var fallback = require('express-history-api-fallback')
const app = express();

const path = require("path");
const port = process.env.PORT || 3000;

// import routes from "../client/routes";
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

//controllers
const indexController = require("./controllers/index.controller");

//passport
const passport = require("passport");
require("dotenv").config();
require("./config/passport");
const session = require("express-session");
const bodyParser = require("body-parser");

//Set middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
// for file upload
app.use(morgan("dev"));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use(passport.initialize());
app.use(passport.session());

//database
const db = require("./models/db");
const allModels = require("./models/db");

//multer object
const multer = require("multer");
// the dest attribute determines where the the uploaded file will be stored
const fileUpload = multer({
  dest: "files",
});

// backend api
app.use("/api/v1", indexController);

// File upload routes with multer middleware
// use .single() to receive one file and .array() for multiple
app.post("/file", fileUpload.single("pdf"), (req, res) => {
  // multer stores relevant information to the file attribute in the req
  console.log(req.file);
  res.json("/file api");
});

// File get routes
// gets the created file
app.get("/file/:filename", (req, res) => {
  // gets the filename
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "files/" + filename);
  res.json("/file/:filename api");
  // this will send back the file when requested
  return res.sendFile(fullfilepath);
});

// Test database
try {
  db.sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    allModels.client
      .findAll()
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err));
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

// app.get(
//     '/settings',
//     passport.authenticate('jwt', { failureRedirect: '/login', failureMessage: true }),
//     function(req, res) {
//       res.redirect('/~' + req.user.username);
//     }
// )

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
  });
});

// app.listen(port, () => {
//     console.log(`The app server is running on port: ${port}`);
// });
