import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Produc from "./Product/Product.jsx";
import Product from "./Product/Product.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Page/notFound.jsx";
import Details from "./Product/details.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Cart from "./Cart/cart.jsx";
import Register from "./Register/Reg.jsx";
import Contact from "./Contact/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Products/:id" element={<Details />} />
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
