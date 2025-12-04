import { useSelector, useDispatch } from "react-redux";
import { addToCart ,decreaseQuantity} from "../store/slice/counter";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navn from "../Navbar/Nav";
import "../App.css"


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const theme = useSelector((state) => state.thema.mode);
 const lang = useSelector((state) => state.language.lang);


  return (
    <>
<div 
  className={theme === "dark" ? "dark-mode" : "light-mode"} 
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  <Navn />

  <Container className="py-5">
    
    <h2 className="mb-4">
      {lang === "ar" ? "عربة التسوق:" : "My Cart:"}
    </h2>

    {cartItems.length === 0 && (
      <p>{lang === "ar" ? "العربة فارغة." : "Your cart is empty."}</p>
    )}

    {cartItems.length > 0 && (
      <div className="mt-4 mb-3 text-center py-2 bg-danger text-white rounded-5 w-50 m-auto">
        <h4>
          {lang === "ar" ? "السعر الكلي:" : "Total Price:"} 
          ${totalPrice.toFixed(2)}
        </h4>
      </div>
    )}

    <Row className="g-3 x">
      {cartItems.map((item) => (
        <Col md={6} lg={4} key={item.product.id}>
          <div className="card h-100 shadow-sm p-3">

            <img
              src={item.product.images[0]}
              alt={item.product.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }}
            />

            <div className="card-body text-center">
              
              <h6 className="card-title">
                {lang === "ar" ? item.product.title_ar || item.product.title : item.product.title}
              </h6>

              <p>
                ${item.product.price.toFixed(2)}  
                {lang === "ar" ? " × " : " x "}
                {item.quantity}
              </p>

              <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => dispatch(decreaseQuantity(item.product.id))}
                >
                  -
                </Button>

                <span>{item.quantity}</span>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => dispatch(addToCart(item.product))}
                >
                  +
                </Button>
              </div>

              <p className="fw-bold">
                {lang === "ar" ? "الإجمالي:" : "Total:"} 
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>

            </div>
          </div>
        </Col>
      ))}
    </Row>

  </Container>

</div>

    </>
  );
}

export default Cart;
