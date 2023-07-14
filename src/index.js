import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartContextProvider from "./store/Cart/CartContextProvider";
import ProductContextProvider from "./store/Product/ProductContextProvider";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ProductContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ProductContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
