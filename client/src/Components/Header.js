import React, { Component } from "react";
import { connect } from "react-redux";
import LoginButton from "./LoginButton";
import Payments from "./Payments";

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    var userActions = !currentUser._id ? (
      <ul id="nav-mobile" className="right">
        <li>
          <LoginButton company="google" />
        </li>
        <li>
          <LoginButton company="github" />
        </li>
      </ul>
    ) : (
      <ul id="nav-mobile" className="right">
        <li>
          <Payments />
        </li>
        <li>
          <div>Credits: {currentUser.credits}</div>
        </li>
        <li>
          <a href="/logout">Log off</a>
        </li>
      </ul>
    );

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          {userActions}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps)(Header);
