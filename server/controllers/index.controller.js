let express = require('express')
const router = express.Router();

router.get('/', (req, res) => {

    res.status(200).send("/ page")
});

router.get('/servering', (req, res) => {

    res.status(200).send("/ page")
});

module.exports = router;