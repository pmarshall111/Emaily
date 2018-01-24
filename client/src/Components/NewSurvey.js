import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

const NewSurveyForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Survey Title</label>
        <Field name="title" component="input" type="text" />
      </div>
    </form>
  );
};

export default reduxForm({ form: "newSurvey" })(NewSurveyForm);
