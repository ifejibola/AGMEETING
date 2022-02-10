module.exports = app => {
    const participants = require('../controllers/participants.controller');
    const router = require('express').Router();

    router.post('/', participants.create);

    router.get('/', participants.findAll);

    router.get('/', participants.findAllForMeeting);

    router.delete('/:id', participants.delete);

    app.use('/api/participants', router);
}
