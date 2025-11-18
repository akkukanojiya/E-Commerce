const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    paymentId: { type: String },
    signature: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    status: { type: String, default: "created" }, // created / paid / failed
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
