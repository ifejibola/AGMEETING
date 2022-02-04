const db = require('../models');
const Moderator = db.Moderator;

exports.create = (req, res) => {
    // Validate request.
    console.log(req.body);
    if (!req.body.email && !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Moderator.
    const moderator = {
        meetingId: req.body.meetingId,
        email: req.body.email,
        password: req.body.password,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Moderator in the database
    Moderator.create(moderator)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Moderator."
            });
        });
};

exports.findAll = (req, res) => {
    Moderator.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status.send({
                message: err.message || 'There was an issue retrieving the moderators.'
            });
        });
};
