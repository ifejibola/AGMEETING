module.exports = app => {
    const moderators = require('../controllers/moderators.controller');
    const router = require('express').Router();

    router.post('/', moderators.create);
    router.get('/', moderators.findAll);
    router.get('/', moderators.findOne);

    app.use('/api/moderators', router);
}
