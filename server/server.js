const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const indexRoutes = require("./controllers/index.controller")
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const db = require('./models');
db.sequelize.sync();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());

require('./routes/participant.routes')(app);

// app.use(express.static("helper"));
// app.use("/", indexRoutes)
app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, '../dist', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });

    // do not use this
    // res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
});
