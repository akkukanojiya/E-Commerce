const crypto = require("crypto");
const razorpay = require("../config/razorpay");
const Order = require("../models/orderModel");

// -------------------------------------------------------
// 1️⃣ CREATE ORDER
// -------------------------------------------------------
exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    // Save to DB
    await Order.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// -------------------------------------------------------
// 2️⃣ VERIFY PAYMENT
// -------------------------------------------------------
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    // Validate signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // Update DB
    await Order.findOneAndUpdate(
      { orderId: razorpay_order_id },
      {
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        status: "paid",
      }
    );

    res.json({ success: true, message: "Payment verified" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Payment verification failed" });
  }
};
