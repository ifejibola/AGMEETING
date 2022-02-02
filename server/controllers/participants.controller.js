const db = require('../models');
const Participant = db.Participant;

exports.findAll = (req, res) => {
    Participant.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status.send({
                message: err.message || 'There was an issue retrieving the participants.'
            });
        });
};
