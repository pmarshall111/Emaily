import React, { Component } from "react";
import { connect } from "react-redux";

class LandingPage extends Component {
  render() {
    const { currentUser } = this.props;
    let { _id: id, name } = currentUser;

    if (name && name.includes(" ")) {
      name = name.split(" ")[0];
    }

    var text = id
      ? `Hello ${name}! Send some emails today!!!`
      : "Sign up for the Emaily experience!";
    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps)(LandingPage);
