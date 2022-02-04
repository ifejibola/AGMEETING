const db = require('../models');
const Meeting = db.Meeting;

exports.create = (req, res) => {
    // Validate request.
    console.log(req.body);
    if (!req.body.moderatorId && !req.body.meetingId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Moderator.
    const meeting = {
        meetingId: req.body.meetingId,
        moderatorId: req.body.moderatorId,
        adminId: req.body.adminId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Moderator in the database
    Meeting.create(meeting)
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
    Meeting.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status.send({
                message: err.message || 'There was an issue retrieving the meeting.'
            });
        });
};