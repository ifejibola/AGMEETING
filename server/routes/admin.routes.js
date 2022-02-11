module.exports = app => {
    const admins = require('../controllers/admins.controller');
    const router = require('express').Router();

    router.post('/', admins.create);

    router.get('/', admins.findAll);

    router.get('/', admins.findOne);

    app.use('/api/admins', router);
}