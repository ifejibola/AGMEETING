let express = require("express");
const registerApi = require("./register.controller");
const loginApi = require("./login.controller");
const testingAuthApi = require("./testing.controller");
const fileApi = require("./file.controller");
const clientApi = require("./client.controller");
const meetingApi = require("./meeting.controller")

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.use(registerApi);
router.use(loginApi);
router.use(testingAuthApi);
router.use(fileApi);
router.use(clientApi);
router.use(meetingApi);

module.exports = router;
