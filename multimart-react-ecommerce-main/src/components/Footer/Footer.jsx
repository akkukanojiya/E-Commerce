
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <Container>
        <Row className="footer-row gy-4">
          {/* Brand Info */}
          <Col md={3} sm={6} className="box">
            <div className="logo d-flex align-items-center mb-3">
              <ion-icon name="bag-outline" size="large"></ion-icon>
              <h1 className="ms-2 fw-bold">ApnaShop</h1>
            </div>
            <p className="text-muted">
              Your one-stop destination for smart, affordable, and quality
              shopping. Discover the latest trends and enjoy a seamless shopping
              experience every day.
            </p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="#" className="text-dark">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" className="text-dark">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#" className="text-dark">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#" className="text-dark">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </Col>

          {/* About Section */}
          <Col md={3} sm={6} className="box">
            <h2 className="fw-semibold mb-3">About Us</h2>
            <ul className="list-unstyled">
               
              <li><a href="#" className="footer-link">Our Stores</a></li>
              <li><a href="#" className="footer-link">Our Mission</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Customer Care */}
          <Col md={3} sm={6} className="box">
            <h2 className="fw-semibold mb-3">Customer Care</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">How to Buy</a></li>
              <li><a href="#" className="footer-link">Track Your Order</a></li>
              <li><a href="#" className="footer-link">Corporate Orders</a></li>
              <li><a href="#" className="footer-link">Returns & Refunds</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={3} sm={6} className="box">
            <h2 className="fw-semibold mb-3">Contact Us</h2>
            <ul className="list-unstyled">
              <li>
                <ion-icon name="location-outline"></ion-icon> Gandhinagar,
                Gujarat
              </li>
              <li>
                <ion-icon name="mail-outline"></ion-icon>{" "}
                <a
                  href="mailto:akashkanojiya307@gmail.com"
                  className="footer-link"
                >
                  akashkanojiya307@gmail.com
                </a>
              </li>
              <li>
                <ion-icon name="call-outline"></ion-icon>{" "}
                <a href="tel:+917976662730" className="footer-link">
                  +91 7976662730
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-4" />
        <div className="text-center text-muted small">
          © {new Date().getFullYear()} <strong>ApnaShop</strong>. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
