const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const googleKeys = require("../../config/keys").googleInfo;
const User = require("../../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleKeys.client_id,
      clientSecret: googleKeys.client_secret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ googleID: profile.id }).then(match => {
        if (match) {
          done(null, match);
        } else
          User.create({
            googleID: profile.id,
            email: profile.emails[0].value,
            name: profile.name.givenName
          }).then(user => {
            done(null, user);
          });
      });
    }
  )
);
