import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const DUMMY_CART = [
  {
    id: 1,
    title: "T-Shirt",
    description: "Its a t-shirt",
    price: 9.99,
    quantity: 3,
  },
  {
    id: 2,
    title: "Bag",
    description: "Good Bag",
    price: 10.99,
    quantity: 2,
  },
  {
    id: 3,
    title: "Mobile Phone",
    description: "New Mobile Phone",
    price: 199.99,
    quantity: 1,
  },
];

function Cart() {
  const [cartList, setCartList] = useState(DUMMY_CART);

  const removeCartItemHandler = (id) => {
    setCartList((prevCart) => {
      return prevCart.filter((cart) => {
        return cart.id !== parseInt(id);
      });
    });
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartRow}>
        <h5>Title</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>{false && "Function"}</h5>
      </div>
      {cartList.map((cart) => {
        return (
          <CartItem
            key={cart.id}
            cart={cart}
            onRemove={removeCartItemHandler}
          />
        );
      })}
    </div>
  );
}

export default Cart;
