import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SurveyItem from "./SurveyItem";

class SurveyList extends Component {
  contructor() {}

  render() {
    if (!this.props.currentUser.surveys)
      return (
        <div>
          <Link to="/surveys/new">Create a new Survey</Link>
        </div>
      );

    const surveys = this.props.currentUser.surveys.map(survey => {
      <SurveyItem info={survey} />;
    });
    return <div>{surveys}</div>;
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps)(SurveyList);
