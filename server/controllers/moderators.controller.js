const db = require('../models');
const Moderator = db.Moderator;
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    // Validate request.
    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required for moderator creation."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required for moderator creation."
        });
        return;
    }
    if (!req.body.meetingId) {
        res.status(400).send({
            message: "A meeting id is required for moderator creation."
        });
        return;
    }

    const meetingId = req.body.meetingId;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    // Create a Moderator.
    const moderator = {
        meetingId: req.body.meetingId,
        email: email,
        password: password,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Moderator in the database
    Moderator.create(moderator)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Moderator."
            });
        });
};

   exports.findAll = (req, res) => {
       Moderator.findAll()
           .then((data) => {
               res.send(data);
           })
           .catch((err) => {
               res.status(500).send({
                   message: err.message || 'There was an issue retrieving the moderators.'
               });
           });
   };

exports.findOne = (req, res) => {
    const { Op } = require("sequelize");
    const email = req.query.email;
    const password = req.query.password;
    Moderator.findOne({
        where: {
            email: email
        }
    })
        .then((data) => {
           if (bcrypt.compareSync(password, data.password)) {
            res.send(data);
        } else {
            res.status(400).send('Invalid password.');
        }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the moderators.'
            });
        });
};

exports.findFromMeeting = (req, res) => {
    const { Op } = require("sequelize");
    const meetingId = req.query.meetingId;
    Moderator.findOne({
        where: {
            meetingId: meetingId
        }
    })
        .then((data) => {
                res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the moderators.'
            });
        });
};
