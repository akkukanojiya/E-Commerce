import { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuyNow = () => {
    navigate("/checkout"); // ✅ Navigate to checkout
  };

  return (
    <section className="cart-items py-4">
      <Container>
        <Row className="justify-content-center g-4">
          {/* Left Side: Cart List */}
          <Col xs={12} lg={8}>
            {cartList.length === 0 && (
              <h4 className="text-center text-danger fw-bold py-5">
                No Items Added in Cart
              </h4>
            )}

            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div
                  className="cart-list border rounded p-3 mb-3 shadow-sm"
                  key={item.id}
                >
                  <Row className="align-items-center gy-3">
                    {/* Product Image */}
                    <Col xs={12} sm={4} md={3} className="text-center">
                      <img
                        src={item.imgUrl}
                        alt={item.productName}
                        className="img-fluid rounded"
                        style={{ maxHeight: "150px", objectFit: "cover" }}
                      />
                    </Col>

                    {/* Product Details */}
                    <Col xs={12} sm={8} md={9}>
                      <Row className="align-items-center text-center text-sm-start">
                        <Col xs={12} sm={8}>
                          <h5 className="fw-semibold mb-1">{item.productName}</h5>
                          <p className="mb-0 text-muted">
                            ${item.price}.00 × {item.qty}
                          </p>
                          <p className="fw-bold mb-0 text-success">
                            = ${productQty}.00
                          </p>
                        </Col>

                        {/* Quantity Controls */}
                        <Col
                          xs={12}
                          sm={4}
                          className="mt-3 mt-sm-0 d-flex justify-content-center justify-content-sm-end"
                        >
                          <button
                            className="btn btn-success btn-sm mx-1"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="btn btn-warning btn-sm mx-1"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <button
                            className="btn btn-danger btn-sm mx-1"
                            onClick={() => dispatch(deleteProduct(item))}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>

          {/* Right Side: Cart Summary */}
          <Col xs={12} lg={4}>
            <div className="cart-total p-4 border rounded shadow-sm bg-light">
              <h4 className="text-center mb-4">Cart Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <h5>Total Price:</h5>
                <h5 className="text-success fw-bold">${totalPrice}.00</h5>
              </div>

              {cartList.length > 0 && (
                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 fw-semibold"
                    onClick={handleBuyNow}
                  >
                    🛒 Buy Now
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
