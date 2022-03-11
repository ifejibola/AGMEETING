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
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());
app.use(cors());

// For passport
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('keyboard cat'));

require('./routes/user.routes')(app);
require('./routes/meeting.routes')(app);
require('./routes/item.routes')(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`The app server is running on port: ${port}`);
    });
});
