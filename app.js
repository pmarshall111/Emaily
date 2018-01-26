const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieKey = require("./config/keys").cookieKey;

const authRoutes = require("./routes/authRoutes");
const stripeRoutes = require("./routes/stripeRoutes");

//setting up cookies
//cookie session takes the data out of the cookie and assigns it to req.session
//passport then gets the id from req.session and finds the user with the deserializeUser function
app.use(
  cookieSession({
    keys: [cookieKey],
    maxAge: 7 * 60 * 60 * 1000
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
authRoutes(app);
stripeRoutes(app);

//because we are running with only 1 server in production, we need to add in some additional
//logic that tells this express server to let react router deal with the route if express
//doesn't understand it.
if (process.env.NODE_ENV === "production") {
  //if a request comes in for our js or css files (which would ask for "client/build/static/js...")
  //we will send back the required file by allowing express access to anything inside of
  //"client/build"
  app.use(express.static("client/build"));

  //if they don't want a css or js file and the route is something express doesn't recognise
  //like /surveys, send back the html file and let react router deal with it.
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("__dirname", "client", "build", "index.html"));
  });
}

module.exports = app;
