module.exports = (app, passport) => {
    const participants = require('../controllers/participants.controller');
    const router = require('express').Router();

    router.post('/register', passport.authenticate('local-signup'));

    router.post('/login', passport.authenticate('local-signin'));

    router.get('/', participants.findAll);

    router.get('/', participants.findAllForMeeting);

    router.delete('/:id', participants.delete);

    router.get('/logout', participants.logout);

    app.use('/api/participants', router);
}
