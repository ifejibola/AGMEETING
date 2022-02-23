const db = require('../models');
const Admin = db.Admin;
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    // Validate request.

    if (!req.body.email) {
        res.status(400).send({
            message: "An email is required for admin creation."
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
            message: "A password is required for admin creation."
        });
        return;
    }

    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    // Create an Admin.
    const admin = {
        email: email,
        password: password,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Admin in the database
    Admin.create(admin)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating an Admin."
            });
        });
};

exports.findAll = (req, res) => {
    Admin.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'There was an issue retrieving the admins.'
            });
        });
};

exports.findOne = (req, res) => {
    Admin.findOne({
        where: {
            email: req.query.email
        }
    }).then(data => {
        bcrypt.compare(req.query.password, data.password, (err, same) => {
            if (err) throw err

            if (same) {
                res.send(data);
            } else {
                res.status(400).send('The password is invalid.');
            }
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || 'There was an issue retrieving the admins.'
        });
    });
};