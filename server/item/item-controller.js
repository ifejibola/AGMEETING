var express = require("express");
var router = express.Router();
const Item = require("./models/Item");
const upload = require("../multerUpload");
const passport = require("passport");
const server = require("../server");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got items");
});

router.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  upload.single("uploaded_file"),
  (req, res) => {
    let jwt = server.getJwt(req);
    if (!jwt.user.is_mod) {
      res.status(401);
      return;
    }
    console.log(req.file);
    Item.create({
      meeting_id: jwt.user.id,
      description: req.file.mimetype,
      filepath: req.file.path,
      file_name: req.file.originalname,
    });
    res.send("single File upload sucess");
  }
);

router.get(
  "/getMeetingItems",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let jwt = server.getJwt(req);
    if (!jwt.user.is_mod) {
      res.status(401);
      return;
    }
    Item.findAll({
      where: {
        meeting_id: jwt.user.moderator_id,
      },
    })
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
);

router.get(
  "/getItem",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.query.filepath) {
      res.status(400).send("no file specified");
      return;
    }
    res.download(req.query.filepath, req.query.filename, (err) => {
      if (err) {
        res.status(400).send(err);
      }
    });
  }
);

module.exports = router;
