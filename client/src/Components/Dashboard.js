import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { currentUserActionCreator } from "../Actions";
import SurveyList from "./SurveyList";

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.props.currentUser.id) {
      //send off an action to get the current user.
      //if action unsuccessful, we need to send off another action to log them out and
      //also kick them back to home screen.
      this.props.getCurrentUser(() => {
        this.props.history.push("/");
      });
    }
  }

  render() {
    return (
      <div>
        <SurveyList />
        <Link to="/surveys/new">
          <button>+</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps, {
  getCurrentUser: currentUserActionCreator
})(Dashboard);
