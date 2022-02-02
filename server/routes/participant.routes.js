module.exports = app => {
    const participants = require('../controllers/participants.controller');
    const router = require('express').Router();

    router.get('/', participants.findAll);

    app.use('/api/participants', router);
}
