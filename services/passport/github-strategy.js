const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const gitHubKeys = require("../../config/keys").gitHubInfo;
const User = require("../../models/User");

passport.use(
  new GitHubStrategy(
    {
      clientID: gitHubKeys.client_id,
      clientSecret: gitHubKeys.client_secret,
      callbackURL: "/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      var match = await User.findOne({ gitHubID: profile.id });
      if (match) return done(null, match);

      var nUser = await User.create({
        gitHubID: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      });
      done(null, nUser);
    }
  )
);
