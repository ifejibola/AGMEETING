const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../config/passport');

exports.create = (req, res) => {
    // Validate request.
    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required for user creation."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required for user creation."
        });
        return;
    }

    // Check if the email already exists in the database.
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (user) {
            res.status(400).send({
                message: "A user already exists with this email."
            });
        } else {
            // Create a User object.
            const user = {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                firstName: req.body.firstName ? req.body.firstName : null,
                lastName: req.body.lastName ? req.body.lastName : null,
                meetingId: req.body.meetingId ? req.body.meetingId : null,
                isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
                isModerator: req.body.isModerator ? req.body.isModerator : false,
                createdAt: Date.now(),
                updatedAt: Date.now()
            };

            // Save the User object in the database.
            User.create(user)
                .then((data) => {
                    res.status(200).send({
                        id: data.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        meetingId: data.meetingId,
                        isAdmin: data.isAdmin,
                        isModerator: data.isModerator
                    });
                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "An error occurred during user registration."
                    });
                });
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "An error occurred during user registration."
        });
    });
};

exports.login = (req, res, next) => {
    // Validate request.
    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required to login."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required to login."
        });
        return;
    }

    passport.authenticate('local', (err, user) => {
        if (err) throw err;
        if (!user) res.status(406).send({message: 'There is no user that matches these credentials.'});
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
            });
            res.status(200).send({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                meetingId: user.meetingId,
                isAdmin: user.isAdmin,
                isModerator: user.isModerator
            });
        }
    })(req, res, next);
};

exports.findAll = (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the users.'
            });
        });
};

exports.findAllForMeeting = (req, res) => {
    const {Op} = require("sequelize");
    User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            [Op.and]: {meetingId: req.query.meetingId}
        }
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the participants.'
            });
        });
};

exports.delete = (req, res) => {
    const id = parseInt(req.query.id);
    User.destroy({
        where: {
            id: id
        }
    })
        .then((num) => {
            if (num === 1) {
                res.status(200).send('The user was deleted successfully.')
            } else {
                res.status(500).send(`Cannot delete user with id=${id}.`)
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue deleting the user.'
            });
        });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).send({
        message: 'The user was logged out successfully.'
    });
};
