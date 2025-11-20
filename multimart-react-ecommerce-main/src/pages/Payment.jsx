import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Payment = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // Load Razorpay script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle Payment
  const handlePayment = async () => {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    try {
      // Create order from backend
      const { data } = await axios.post("http://localhost:5000/payment/create", {
        amount: totalPrice,
      });

      const options = {
        key: "rzp_test_RhAm1mwY2iFNYf", // Your Razorpay test key
        amount: data.amount,
        currency: data.currency,
        name: "My Shop",
        description: "Order Payment",
        order_id: data.id,
        handler: function (response) {
          alert("Payment Successful 😊");
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          navigate("/payment-success");
        },
        prefill: {
          name: "Akash Kanojiya",
          email: "akashkanojiya307@gmail.com",
          contact: "7976662730",
        },
        theme: {
          color: "#0d6efd",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Server Error! Please check backend.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow text-center">
            <h3 className="mb-3">Payment Summary 💳</h3>
            <h4 className="fw-bold">Total Amount: ₹{totalPrice}.00</h4>

            <Button
              variant="success"
              className="w-100 mt-4"
              onClick={handlePayment}
            >
              Pay with Razorpay 🪙
            </Button>

            <Button
              variant="outline-secondary"
              className="w-100 mt-3"
              onClick={() => navigate("/checkout")}
            >
              ← Back to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
