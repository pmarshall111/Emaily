import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { updateUserCreditsCreator } from "../Actions";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    console.log(token);
    this.props.sendToken(token);
  }

  render() {
    return (
      <StripeCheckout
        amount={1000}
        currency="GBP"
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        name="Emaily"
        description="Buy 10 tokens for £10"
      >
        <button className="btn">Add Credits!</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { sendToken: updateUserCreditsCreator })(Payments);
