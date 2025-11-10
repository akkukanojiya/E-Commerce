
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const Payment = () => {
//   const navigate = useNavigate();
//   const { cartList } = useSelector((state) => state.cart);

//   const totalPrice = cartList.reduce(
//     (price, item) => price + item.qty * item.price,
//     0
//   );

//   const loadRazorpay = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert("Razorpay SDK failed to load. Check your internet connection.");
//       return;
//     }

//     // Create order on backend
//     const result = await axios.post("http://localhost:5000/create-order", {
//       amount: totalPrice,
//     });

//     if (!result) {
//       alert("Server error. Are you sure the backend is running?");
//       return;
//     }

//     const { amount, id: order_id, currency } = result.data;

//     const options = {
//       key: "YOUR_KEY_ID", // ⚠️ Replace with your Razorpay Key ID
//       amount: amount.toString(),
//       currency: currency,
//       name: "My Shop",
//       description: "Test Transaction",
//       order_id: order_id,
//       handler: function (response) {
//         // Payment successful!
//         alert(`Payment ID: ${response.razorpay_payment_id}`);
//         navigate("/payment-success");
//       },
//       prefill: {
//         name: "Akash Kanojiya",
//         email: "akash@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "My Shop Corporate Office",
//       },
//       theme: {
//         color: "#0d6efd",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="p-4 shadow-sm text-center">
//             <h3 className="mb-4">Payment Summary 💳</h3>
//             <h4>Total Amount: ₹{totalPrice}.00</h4>

//             <Button
//               variant="success"
//               className="w-100 mt-4 fw-semibold"
//               onClick={handlePayment}
//             >
//               Pay with Razorpay 🪙
//             </Button>

//             <Button
//               variant="outline-secondary"
//               className="w-100 mt-3"
//               onClick={() => navigate("/checkout")}
//             >
//               ← Back to Checkout
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Payment;
