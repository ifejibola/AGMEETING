const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;


const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));
// app.use(express.static("helper"));

app.get("/", (req, res) => {
    res.sendFile(HTML_FILE, function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
});