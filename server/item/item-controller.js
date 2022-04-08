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
    console.log(req.body);
    let jwt = server.getJwt(req);
    if (!jwt.user.is_mod) {
      res.status(401);
      return;
    }
    res.send("single File upload sucess");
  }
);

module.exports = router;
