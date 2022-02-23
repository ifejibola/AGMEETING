const db = require('../models');
const Item = db.Item;

exports.create = (req, res) => {
    // Validate request.
    console.log(req.body);
    if (!req.body.meetingId && !req.body.file) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an Item.
    const item = {
        meetingId: req.body.meetingId,
        file: req.body.file,
        description: req.body.description,
        votesAgainst: req.body.votesAgainst,
        votesFor: req.body.votesFor,
        abstains: req.body.abstains,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Moderator in the database
    Item.create(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Meeting."
            });
        });
};

exports.findAll = (req, res) => {
    Item.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status.send({
                message: err.message || 'There was an issue retrieving the meeting.'
            });
        });
};