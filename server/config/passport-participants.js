const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const db = require('../models');
const Participant = db.Participant;

const findId = async (id, done) => {
    await Participant.findOne({
        where: {
            id: id
        }
    }).then(async (user) => {
        console.log(user.email);
        return done(null, user.id);
    });
};

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        const findEmail = async (data) => {
            await Participant.findOne({
                where: {
                    email: data
                }
            }).then(async (user) => {
                if (!user) {
                    return done(null, false, {message: 'Incorrect email.'});
                }
                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, user);
            }).catch((err) => done(err));
        };
        findEmail(email);
    }
));

passport.serializeUser((participant, done) => {
    done(null, participant.id);
});

passport.deserializeUser((id, done) => {
    Participant.findOne({
        where: {
            id: id
        }
    }).then((participant) => {
        if (participant) {
            done(null, participant.get());
        } else {
            done(participant.errors, null);
        }
    });
});
