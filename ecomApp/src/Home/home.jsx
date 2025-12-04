import Navn from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
function Home() {
  return (
    <>
    
      <Navn />
      <div className="py-5">
        <Container className="text-center">
          <h1 className="mb-3">Welcome to Ecommerce</h1>

          <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
            Discover the best products at the best prices.
          </p>

          <Button variant="dark" size="lg" as={Link} to="/Products">
              Shop New
      
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Home;
