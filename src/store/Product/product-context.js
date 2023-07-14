import React from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

export default ProductContext;
