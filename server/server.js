const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const indexRoutes = require("./controllers/index.controller")
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const db = require('./models');
const passport = require('passport');
const localStrategy = require('passport-local');
const session = require('express-session');

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());

// For passport
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./routes/participant.routes')(app);
require('./routes/admin.routes')(app);
require('./routes/moderator.routes')(app);
require('./routes/meeting.routes')(app);
require('./routes/item.routes')(app);

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

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`The app server is running on port: ${port}`);
    });
});
