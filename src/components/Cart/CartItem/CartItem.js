import React from "react";
import styles from "../Cart/Cart.module.css";

function CartItem(props) {
  const removeCartHandler = () => {
    props.onRemove(props.cart.id);
  };
  return (
    <div className={styles.cartRow}>
      <span>{props.cart.title}</span>
      <span>${props.cart.price}</span>
      <span>{props.cart.quantity}</span>
      <button onClick={removeCartHandler}>remove</button>
    </div>
  );
}

export default CartItem;
