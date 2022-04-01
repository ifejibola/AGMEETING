const express = require("express");
// var fallback = require('express-history-api-fallback')
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
// import routes from "../client/routes";
const indexRoutes = require("./controllers/index.controller")

const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require("body-parser");


//db
const db = require('../models');

//passport
const passport = require('passport');
require('../config/passport');

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(cookieParser('agmV2'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//static files 
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

//passport
app.use(passport.initialize());
app.use(passport.session());

//routes 
require('./routes/user.routes')(app);
// require('./routes/meeting.routes')(app);
// require('./routes/item.routes')(app);
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
