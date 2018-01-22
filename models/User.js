const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: "there"
  },
  email: String,
  password: String,
  googleID: Number,
  gitHubID: Number
});

const User = mongoose.model("users", userSchema);

module.exports = User;
