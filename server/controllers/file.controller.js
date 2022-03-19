// check if this is correct
const dbFile = require("../models/file");
const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
const { extname } = require("path");

// upload image controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb = callback function
    // the filename will be date.now() to stop it from duplicating
    // Example: 01/01/2001.pdf / 01/01/2001.docx
    cb(null, "../files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  // fileSize in bytes
  // limits: {fileSize: '1000000'},
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf|docx/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("File formate not accepted");
  },
}).single("name");

const fileUpload = multer({
  dest: "files",
});
// TODO use upload instead to store at database
router.post("/file", fileUpload.single("pdf"), (req, res) => {
  // multer stores relevant information to the file attribute in the req
  console.log(req.file);
  res.json("/file api");
});

router.get("/file/:filename", (req, res) => {
  // gets the filename
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "files/" + filename);
  res.json("/file/:filename api");
  // this will send back the file when requested
  return res.sendFile(fullfilepath);
});

// TODO update model with fileName instead of name
//.single({front-end name})
module.exports = router;
