const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const db = require('../models');
const User = db.User;

const findId = async (id, done) => {
    await User.findOne({
        where: {
            id: id
        }
    }).then(async (user) => {
        return done(null, user.id);
    });
};

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        const findEmail = async (data) => {
            await User.findOne({
                where: {
                    email: data
                }
            }).then(async (user) => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            }).catch((err) => done(err));
        };
        findEmail(email);
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({
        where: {
            id: id
        }
    }).then((user) => {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});