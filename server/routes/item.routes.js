module.exports = app => {
    const items = require('../controllers/items.controller');
    const router = require('express').Router();

    router.post('/', items.create);

    router.get('/', items.findAll);

    app.use('/api/items', router);
}