const passport = require("passport");
const User = require("../../models/User");

passport.serializeUser((user, done) => {
  //because in mLab the generated ID is stored under _id.$OId, we can use user.id as a shortcut
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});
