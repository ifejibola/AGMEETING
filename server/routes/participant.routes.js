module.exports = (app) => {
    const participants = require('../controllers/participants.controller');
    const router = require('express').Router();

    router.post('/register', participants.create);

    router.post('/login', participants.login);

    router.get('/', participants.findAll);

    router.get('/', participants.findAllForMeeting);

    router.delete('/:id', participants.delete);

    router.get('/logout', participants.logout);

    app.use('/api/participants', router);
}
