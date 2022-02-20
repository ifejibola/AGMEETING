const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');

module.exports = (passport, participant) => {
    const Participant = participant;
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, (req, email, password, done) => {
            Participant.findOne({
                where: {email: email}
            }).then((participant) => {
                if (participant) {
                    return done(null, false, {
                        message: 'That email is already in use.'
                    });
                } else {
                    const hashedPassword = bcrypt.hashSync(password, 10);
                    const data = {
                        email: email,
                        password: hashedPassword,
                        meetingId: req.body.meetingId,
                        createdAt: Date.now(),
                        updatedAt: Date.now()
                    }
                    Participant.create(data).then((participant) => {
                        if (!participant) {
                            return done(null, false);
                        }
                        if (participant) {
                            return done(null, participant);
                        }
                    });
                }
            });
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
};
