module.exports = (app) => {
    const users = require('../controllers/users.controller');
    const router = require('express').Router();

    router.post('/register', users.create);

    router.post('/login', users.login);

    router.get('/', users.findAll);

    router.get('/', users.findAllForMeeting);

    router.delete('/:id', users.delete);

    router.get('/logout', users.logout);

    app.use('/api/users', router);
}
