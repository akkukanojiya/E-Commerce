import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const handlePayment = () => {
    navigate("/payment"); // Redirect to Razorpay payment page
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Checkout Summary</h2>

      {cartList.length === 0 ? (
        <h5 className="text-center text-danger fw-bold py-5">
          Your cart is empty — please add some items first.
        </h5>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm p-4">
              <h4 className="mb-3">Order Preview</h4>
              <div className="border-bottom mb-3"></div>

              {cartList.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      width={70}
                      height={70}
                      className="rounded"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-1">{item.productName}</h6>
                      <small className="text-muted">
                        Qty: {item.qty} × ₹{item.price}.00
                      </small>
                    </div>
                  </div>
                  <div className="fw-semibold text-success">
                    ₹{item.price * item.qty}.00
                  </div>
                </div>
              ))}

              <div className="border-top pt-3 mt-3 d-flex justify-content-between">
                <h5>Total:</h5>
                <h5 className="text-success fw-bold">₹{totalPrice}.00</h5>
              </div>

              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="fw-semibold"
                  onClick={handlePayment}
                >
                  Proceed to Payment 💳
                </Button>

                <div className="mt-3">
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate("/cart")}
                  >
                    ← Back to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Checkout;
