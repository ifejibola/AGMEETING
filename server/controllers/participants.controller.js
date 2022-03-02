const db = require('../models');
const Participant = db.Participant;
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../config/passport-participants');

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
            res.status(200).send({
                id: data.id,
                email: data.email,
                meetingId: data.meetingId
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Participant."
            });
        });
};

exports.login = (req, res, next) => {
    // Validate request.
    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required to get participant."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required to get participant."
        });
        return;
    }

    passport.authenticate('local', (err, user) => {
        if (err) throw err;
        if (!user) res.status(400).send({message: 'There is no matching user.'});
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
            });
            res.status(200).send({
                id: user.get().id,
                email: user.get().email,
                meetingId: user.get().meetingId
            });
        }
    })(req, res, next);
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
    const {Op} = require("sequelize");
    Participant.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            [Op.and]: {meetingId: req.query.meetingId}
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

exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).send({
        message: 'The user was logged out successfully.'
    });
};
