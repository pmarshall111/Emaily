require("../services/passport/passport");
require("../services/passport/google-strategy");
require("../services/passport/github-strategy");
const passport = require("passport");

//PROBLEM//

//Right now a user can log in with both their google and github accounts and
//there is no way to link the 2. The plan is when a user logs in, we will check
//the email they used for google and github and if a record already exists with
//a different provider, we will inform the user and ask if they want to merge accounts.
//If they do, we will give them a sign-in button to whichever oauth they already have
//an account with and if they can succesfully sign in, we will merge the accounts.

//need to add in a regular login route also with passwords - bcrypt + email

//this function takes our app object and attaches these routes to it
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send({ message: "howdy", user: req.user });
  });

  app.get("/logout", (req, res) => {
    //this is a function added by passport to the req object
    req.logout();
    res.send({ message: "cya", user: req.user });
  });

  //google oauth routes
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get("/auth/google/callback", passport.authenticate("google"));

  //github oath routes
  app.get("/auth/github", passport.authenticate("github", { scope: ["user"] }));
  app.get("/auth/github/callback", passport.authenticate("github"));
};
