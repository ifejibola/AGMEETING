// check if this is correct
const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
//const { extname } = require("path");
const files = require("../models/files");

// upload image controller

// let's multer where and how to store file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb = callback function
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    // the filename will be date.now() to stop it from duplicating
    // Example: 01/01/2001.pdf / 01/01/2001.docx
    // saving it to files folder
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  // fileSize in bytes
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (ext !== ".pdf" && ext !== ".docx") {
      return cb(new Error("Only pdf and docx are allowed"));
    }
    cb(null, true);
  },
});

// TODO use upload instead to store at database
router.post("/file", upload.single("docFiles"), async (req, res) => {
  const name = req.file.originalname;
  const file_loc = req.file.path;
  const newFile = new files({ name, file_loc });
  const savedFile = newFile.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot upload the file at the moment" });
  });

  if (savedFile) {
    res.json({ message: "File Uploaded" });
  }
  // multer stores relevant information to the file attribute in the req
  //console.log(req.file);
});

//TODO: Fix this to get all files in the folder
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
