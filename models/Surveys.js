const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const Surveys = mongoose.model("surveys", surveySchema);

module.exports = Surveys;
