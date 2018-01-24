import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { currentUserActionCreator } from "../Actions";

import Header from "./Header";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import NewSurvey from "./NewSurvey";

class App extends Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={NewSurvey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { getCurrentUser: currentUserActionCreator })(App);
