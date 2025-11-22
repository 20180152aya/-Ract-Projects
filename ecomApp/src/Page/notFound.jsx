import Navn from "../Navbar/Nav";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NotFound() {
  return (
    <>
      <Navn />
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={12} className="mb-4 mb-md-0 text-center">
            <img
              src="https://imgs.search.brave.com/M92kumtlqZsrmb4VM-UQgTPKTckQAZJf8oNyijr-Z1k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/NDA0LWVycm9yLXRl/bXBsYXRlLWZsYXQt/c3R5bGVfMjMtMjE0/Nzc1NjQ3MC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
              alt="Page Not Found"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;
