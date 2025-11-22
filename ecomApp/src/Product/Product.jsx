import { useEffect, useState } from "react";
import { instance } from "../axios";
import Navn from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Product.css";
import { Link } from "react-router-dom";
import Details from "./details";
import "./Product.css";


function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 12;

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    instance
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotal(res.data.total);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const totalPages = Math.ceil(total / limit);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={"f" + i} color="gold" />);
    if (halfStar) stars.push(<FaStarHalfAlt key="h" color="gold" />);
    for (let i = 0; i < emptyStars; i++)
      stars.push(<FaRegStar key={"e" + i} color="gold" />);
    return stars;
  };

  return (
    <>
      <Navn />
      <Container className="py-5">
        <div className="row">
          {products.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="product-card h-100 shadow-sm position-relative">
                <span
                  className={`badge-stock ${item.stock === 0 ? "out" : "in"}`}
                >
                  {item.stock === 0 ? "Out of Stock" : "In Stock"}
                </span>
                <Link to={`/Products/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </Link>

                <div className="card-body text-center">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="text-muted mb-1">${item.price}</p>
                  <div className="mb-2">{renderStars(item.rating)}</div>
                  <Button
                    variant="dark"
                    size="sm"
                    disabled={item.stock === 0}
                    className="mb-3"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4 gap-2 flex-wrap">
          <Button
            variant="dark"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <Button
                key={page}
                variant={currentPage === page ? "dark" : "outline-dark"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            );
          })}

          <Button
            variant="dark"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Product;
