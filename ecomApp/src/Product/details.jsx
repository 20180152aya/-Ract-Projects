import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Navn from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slice/counter";

import "../App.css";


function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.thema.mode);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    instance
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={"f" + i} color="gold" />);
    if (halfStar) stars.push(<FaStarHalfAlt key="h" color="gold" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={"e" + i} color="gold" />);

    return stars;
  };

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <Navn />

      <Container
        className="py-5"
        style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0 product-card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </Col>

          <Col md={7} className="lighCard ">
            <h2 className="fw-bold mb-2">{product.title}</h2>

            <p
              className="d-inline-block mb-3 px-3 py-1 fw-bold"
              style={{
                border: "1px solid #222",
                borderRadius: "20px",
                backgroundColor: "azure",
                color: "#222",
                fontSize: "0.85rem",
              }}
            >
              {product.category}
            </p>

            <p className="mb-3">
              <span style={{ textDecoration: "line-through", marginRight: "10px", color: "#888" }}>
                ${product.price.toFixed(2)}
              </span>
              <span className="fw-bold" style={{ fontSize: "1.25rem", color: "#222" }}>
                ${discountedPrice}
              </span>
            </p>

            <p className="mb-3">{product.description}</p>

            <p className="mb-1"><strong>Brand:</strong> {product.brand}</p>
            <p className="mb-1"><strong>SKU:</strong> {product.sku}</p>
            <p className="mb-1"><strong>Weight:</strong> {product.weight} g</p>
            <p className="mb-1">
              <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
            </p>
            <p className="mb-1"><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p className="mb-1"><strong>Shipping:</strong> {product.shippingInformation}</p>

            <p className="mb-3">
              <strong>Availability:</strong>{" "}
              <span className={product.stock > 0 ? "text-success" : "text-danger"}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            <div className="mb-4">{renderStars(product.rating)}</div>

            <Button
              variant="dark"
              disabled={product.stock === 0}
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>

        <Row className="mt-5 lighCard x">
          <Col>
            <h4 className="mb-3">Reviews</h4>
            {product.reviews.length === 0 && <p>No reviews yet.</p>}
            {product.reviews.map((rev, idx) => (
              <div key={idx} className="mb-3 p-3 border rounded shadow-sm">
                <p className="mb-1">
                  <strong>{rev.reviewerName}</strong> ({new Date(rev.date).toLocaleDateString()})
                </p>
                <div className="mb-1">{renderStars(rev.rating)}</div>
                <p className="mb-0">{rev.comment}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Details;
