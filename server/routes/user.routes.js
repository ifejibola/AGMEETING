module.exports = (app) => {
    const users = require('../controllers/users.controller');
    const router = require('express').Router();

    app.use('/api/users', router);

    router.post('/register', users.create);

    router.post('/login', users.login);

    router.get('/', users.findAll);

    router.get('/', users.findAllForMeeting);

    router.delete('/delete', users.remove);

    router.get('/logout', users.logout);

}