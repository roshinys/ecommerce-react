import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";
import CartContext from "../../../store/Cart/cart-context";

function Cart() {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <div className={styles.cartRow}>
        <h5>Title</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>{false && "Function"}</h5>
      </div>
      {cartCtx.cartItems.map((cart) => {
        return (
          <CartItem
            key={cart.id}
            cart={cart}
            onRemove={cartCtx.removeCartItem}
          />
        );
      })}
    </div>
  );
}

export default Cart;
