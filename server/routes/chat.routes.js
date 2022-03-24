module.exports = (app, io) => {
    const chat = require('../controllers/chat.controller');
    const router = require('express').Router();

    router.post('/', (req, res, next) => {
        res.locals.io = io;
        next();
    }, chat.chat);

    app.use('/api/chat', router);
}
