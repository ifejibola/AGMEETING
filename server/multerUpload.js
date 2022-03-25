// import and initialize multer
const multer = require("multer");
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // where to store the file
    cb(null, path.join(__dirname, "/uploadedFiles/"));
  },
  filename: (req, file, cb) => {
    // name file date + original name
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = upload;
