import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 fixed-bottom text-center">
      <Container>
        <Row className="text-center text-md-start">

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Ecommerce</h5>
            <p style={{ fontSize: "14px" }}>
              Your trusted store for all your needs. Best products, best prices.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/Products" className="text-white text-decoration-none">Products</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p style={{ fontSize: "14px" }} className="mb-1">Email: support@ecommerce.com</p>
            <p style={{ fontSize: "14px" }}>Phone: +123 456 789</p>
          </Col>

        </Row>

        <Row className="pt-3 border-top border-secondary text-center">
          <p className="m-0" style={{ fontSize: "13px" }}>
            © 2025 Ecommerce. All Rights Reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
