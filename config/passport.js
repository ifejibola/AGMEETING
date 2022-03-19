const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const Participant = require("../server/participant/models/participant");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
require("dotenv");

// middleware for  login endpoint
/**
 * Look up user info in the request body and try to find corresponding use, then see if the
 * password given to the user was valid
 */
const findId = async (id, done) => {
  await Participant.findOne({
    where: {
      id: id,
    },
  }).then(async (user) => {
    console.log("name: ", user.name);
    console.log("deserialize id: ", user.id);
    return done(null, user.id);
  });
};

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      // findEmail(email, password, done)
      const findEmail = async (data) => {
        await Participant.findOne({
          where: {
            email: data,
          },
        })
          .then(async (user) => {
            if (!user) {
              return done(null, false, { message: "Incorrect username." });
            }
            console.log(
              "Processing .... ******* **********",
              JSON.stringify(user)
            );
            // if (!user.password === password) {
            const match = await bcrypt.compare(password, user.password);

            console.log("Match", match);

            if (!match) {
              console.log("here");
              window.alert("Incorrect email or password.");
              return done(null, false, { message: "Incorrect password." });
            }
            console.log("***** Login Success .... *****");
            console.log(" ");
            console.log(" ");
            console.log(" ");
            console.log(`***** Welcome ${user.email} .... *****`);

            return done(null, user);
          })
          .catch((err) => done(err));
      };
      findEmail(email);
    }
  )
);

passport.use(
  "jwt",
  new JWTstrategy(
    {
      secretOrKey: process.env.ACCESS_TOKEN_KEY,
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      console.log("token is here", token);
      try {
        console.log("token is here", token);
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  Participant.findOne({
    where: {
      id: id,
    },
  }).then((user) => {
    return done(null, user);
  });

  // console.log("deserializeUser: ", id);
  // console.log(" ");
  // findId(id, done)
  // done(err, id)
});
