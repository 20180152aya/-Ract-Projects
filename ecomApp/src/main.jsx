import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Produc from "./Product/Product.jsx";
import Product from "./Product/Product.jsx";
import { Route,Routes } from "react-router-dom";
import NotFound from "./Page/notFound.jsx";
import Details from "./Product/details.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Products/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
