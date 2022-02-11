const db = require('../models');
const Participant = db.Participant;
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    // Validate request.
    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required for participant creation."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required for participant creation."
        });
        return;
    }
    if (!req.body.meetingId) {
        res.status(400).send({
            message: "A meeting id is required for participant creation."
        });
        return;
    }

    const meetingId = req.body.meetingId;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    // Create a Participant.
    const participant = {
        email: email,
        password: password,
        meetingId: meetingId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Participant in the database
    Participant.create(participant)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Participant."
            });
        });
};

exports.findAll = (req, res) => {
    Participant.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the participants.'
            });
        });
};

exports.findAllForMeeting = (req, res) => {
    const { Op } = require("sequelize");
    Participant.findAll({
        attributes: {
            exclude: ['password']
        }, 
            where: {
            [Op.and]:{meetingId: req.query.meetingId}
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the participants.'
            });
        });
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    Participant.destroy({
        where: {
            id: id
        }
    })
        .then((num) => {
            if (num === 1) {
                res.send('Participant was deleted successfully.')
            } else {
                res.send(`Cannot delete participant with id=${id}.`)
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue deleting the participant.'
            });
        });
};
