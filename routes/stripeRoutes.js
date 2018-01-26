const stripe = require("stripe")(require("../config/keys").stripeSecretKey);
const User = require("../models/User");

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    // make the charge, edit the existing user, send back updated user.
    var charge = await stripe.charges.create({
      amount: 1000,
      currency: "gbp",
      source: req.body.id,
      description: "Charge from Emaily: £10 for 10 credits"
    });

    if (charge.status === "succeeded") {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id },
        { $inc: { credits: 10 } },
        { new: true }
      );

      res.send({ user: updatedUser });
    } else res.send({ error: "Charge unsuccessful" });
  });
};
