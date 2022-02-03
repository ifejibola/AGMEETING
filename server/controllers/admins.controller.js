const db = require('../models');
const Admin = db.Admin;

exports.create = (req, res) => {
    // Validate request.
    console.log(req.body);
    if (!req.body.email && !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an Admin.
    const admin = {
        email: req.body.email,
        password: req.body.password,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    // Save Admin in the database
    Admin.create(admin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating an Admin."
            });
        });
};

exports.findAll = (req, res) => {
    Admin.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status.send({
                message: err.message || 'There was an issue retrieving the admins.'
            });
        });
};
