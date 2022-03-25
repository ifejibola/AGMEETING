var express = require("express");
var router = express.Router();
const Item = require("./models/Item");
const upload = require("../multerUpload");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got items");
});

router.post("/upload", upload.single("uploaded_file"), (req, res) => {
  console.log(req.body);
  res.send("single File upload sucess");
});

module.exports = router;
