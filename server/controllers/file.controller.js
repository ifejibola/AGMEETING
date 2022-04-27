// check if this is correct
const multer = require("multer");
const path = require("path");
const express = require("express");
const router = express.Router();
//const { extname } = require("path");
const files = require("../models/files");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// upload image controller

// let's multer where and how to store file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb = callback function
    cb(null, "./files");
  },
  filename: (req, file, cb) => {
    // the filename will be date.now() to stop it from duplicating
    // Example: 01/01/2001.pdf / 01/01/2001.docx
    // saving it to files folder
    cb(null, Date.now() + "--" + file.originalname);
  },
});

// TODO need to test this
// Try sending jpeg and other files
const upload = multer({
  storage: storage,
  // fileSize in bytes
  limits: { fileSize: "10000000" },
  fileFilter: (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (ext !== ".pdf" && ext !== ".docx") {
      return cb(new Error("Only pdf and docx are allowed"));
    }
    cb(null, true);
  },
});

router.post("/file", upload.single("theFile"), async (req, res) => {
  // TODO: file name comes from front end
  console.log(req);
  const name = req.body.FileName;
  const file_loc = req.file.path;
  const comment = req.body.commentFile;
  const newFile = new files({ name, file_loc, comment });
  console.log(req.body);
  const savedFile = newFile.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot upload the file at the moment" });
  });
  console.log(newFile);

  if (savedFile) {
    res.json({ message: "File Uploaded" });
  }
  // multer stores relevant information to the file attribute in the req
  //console.log(req.file);
});

//gets all the files for the front end
router.get(
  "/allFiles",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const allFiles = await files.findAll().catch((err) => {
      console.log("Error: ", err);
    });

    if (!allFiles) {
      return res.json({ message: "this files does not exists" });
    }

    return res.json({ theFiles: allFiles });
  }
);

router.get("/download/:fileId", async (req, res) => {
  // try {
  //   const file = await files.findById(req.params.id);
  //   res.set({
  //     "Content-Type": ".pdf",
  //   });
  //   res.sendFile(path.join(__dirname, "..", file.file_loc));
  // } catch (error) {
  //   res.status(400).send("Error while downloading file. Try again later.");
  // }

  const fileWithId = await files
    .findOne({ where: { id: req.params.fileId } })
    .catch((err) => {
      console.log("Error: ", err);
    });
  if (!fileWithId) {
    return res.json({ message: "file with that id not exists" });
  }

  res.set({
    "Content-Type": "application/octet-stream; charset=utf-8",
  });
  return res.sendFile(path.join(__dirname, "../", "../", fileWithId.file_loc));
});

// router.get("/file/:filename", (req, res) => {
//   // gets the filename
//   const { filename } = req.params;
//   const dirname = path.resolve();
//   const fullfilepath = path.join(dirname, "files/" + filename);
//   res.json("/file/:filename api");
//   // this will send back the file when requested
//   return res.sendFile(fullfilepath);
// });

// TODO update model with fileName instead of name
//.single({front-end name})
module.exports = router;
