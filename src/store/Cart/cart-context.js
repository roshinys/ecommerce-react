import React from "react";

const CartContext = React.createContext({
  cartItemsCount: 0,
  cartItems: [],
  addCartItem: (product) => {},
  removeCartItem: (id) => {},
});

export default CartContext;
