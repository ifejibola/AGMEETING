const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const client = require("../models/client");

passport.use(
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
        _secretOrKeyProvider: process.env.JWT_SECRET
    },
    (jwtPayLoad, done) => {
        return client.findOne({ where: { id: jwtPayLoad.id }})
            .then((user) => {
                return done(null, user);
            })
            .catch((err) => {
                return done(err);
            })
    })
);
