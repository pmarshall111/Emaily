const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const gitHubKeys = require("../../config/keys").gitHubInfo;
const User = require("../../models/User");

passport.use(
  new GitHubStrategy(
    {
      clientID: gitHubKeys.client_id,
      clientSecret: gitHubKeys.client_secret,
      callbackURL: "/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log({ accessToken, refreshToken, profile });
      User.findOne({ gitHubID: profile.id }).then(match => {
        if (match) done(null, match);
        else {
          User.create({
            gitHubID: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          }).then(user => {
            console.log({ user });
            done(null, user);
          });
        }
      });
    }
  )
);
