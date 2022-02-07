const db = require('../models');
const Participant = db.Participant;

exports.create = (req, res) => {
    // Validate request.
    console.log(req.body);
    if (!req.body.email && !req.body.password && !req.body.meetingId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Participant.
    const participant = {
        email: req.body.email,
        password: req.body.password,
        meetingId: req.body.meetingId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Participant in the database
    Participant.create(participant)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Participant."
            });
        });
};

exports.findAll = (req, res) => {
    Participant.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send({
                message: err.message || 'There was an issue retrieving the participants.'
            });
        });
};
