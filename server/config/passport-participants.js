const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');

module.exports = (passport, participant) => {
    const Participant = participant;
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
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

    passport.use('local-signin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            pasReqToCallback: true
        }, (req, email, password, done) => {
            const Participant = participant;
            const isValidPassword = (userPassword, password) => {
                return bcrypt.compareSync(password, userPassword);
            };

            Participant.findOne({
                where: {
                    email: email
                }
            }).then((participant) => {
               if (!participant) {
                   return done(null, false, {
                       message: 'The email does not exist.'
                   });
               }

               if (!isValidPassword(participant.password, password)) {
                   return done(null, false, {
                       message: 'The password is incorrect.'
                   });
               }

               const participantInfo = participant.get();
               return done(null, participantInfo);
            }).catch((err) => {
                console.log(err);
                return done(null, false, {
                    message: 'Something went wrong with the login.'
                });
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
