module.exports = app => {
    const meetings = require('../controllers/meetings.controller');
    const router = require('express').Router();

    router.post('/', meetings.create);

    router.get('/', meetings.findAll);

    app.use('/api/meetings', router);
}