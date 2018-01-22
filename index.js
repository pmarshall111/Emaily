const mongoose = require("mongoose");
const mongoURI = require("./config/keys").mongoURI;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);

const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app is go: " + PORT);
});
