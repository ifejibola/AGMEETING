module.exports = (app, passport) => {
    const participants = require('../controllers/participants.controller');
    const router = require('express').Router();

    router.post('/register', passport.authenticate('local-signup'));

    router.get('/login', participants.find);

    router.get('/', participants.findAll);

    router.get('/', participants.findAllForMeeting);

    router.delete('/:id', participants.delete);

    app.use('/api/participants', router);
}
