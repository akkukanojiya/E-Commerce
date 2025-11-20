const Razorpay = require("razorpay");
require("dotenv").config();

const razorpayInstance = new Razorpay({
  key_id: process.env.rzp_test_RhAm1mwY2iFNYf,
  key_secret: process.env.F5yBWEexmwVtLnbZfyewi9b8,
});

module.exports = razorpayInstance;
