import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/slice/them";
import { toggleLang } from "../store/slice/languageSlice";
import "../App.css";

import "./nav.css";
function Navn() {
  const counter = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const theme = useSelector((state) => state.thema.mode);
  const lang = useSelector((state) => state.language.lang);

  const dispatch = useDispatch();

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <Navbar
        expand="lg"
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={theme === "dark" ? "bg-dark navbar-dark" : "bg-primary"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            {lang === "ar" ? "المتجر الإلكتروني" : "Ecommerce"}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={lang === "ar" ? "ms-auto" : "me-auto"}>
              <Nav.Link as={Link} to="/">
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Nav.Link>

              <Nav.Link as={Link} to="/Products">
                {lang === "ar" ? "المنتجات" : "Products"}
              </Nav.Link>
              <Nav.Link as={Link} to="/Register">
                {lang === "ar" ? "تسجيل الدخول" : "Register"}
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                {lang === "ar" ? " تواصل معنا" : "Contact Us"}
              </Nav.Link>
            </Nav>

            <Nav
              className={
                lang === "ar"
                  ? "me-auto d-flex align-items-center gap-3"
                  : "ms-auto d-flex align-items-center gap-3"
              }
            >
              <button
                onClick={() => dispatch(toggleLang())}
                className="btn btn-outline-light btn-sm"
              >
                {lang === "en" ? "AR" : "EN"}
              </button>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="btn btn-outline-warning btn-sm"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              <Nav.Link
                as={Link}
                to="/Cart"
                className="d-flex align-items-center"
              >
                <FaShoppingCart
                  style={{ fontSize: "18px", marginRight: "4px" }}
                />
                {lang === "ar" ? "السلة" : "Cart"}{" "}
                <span className="badge bg-danger ms-1 text-white">
                  {counter}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navn;
