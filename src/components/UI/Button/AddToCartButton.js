import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./AddToCartButton.module.css";
import CartContext from "../../../store/Cart/cart-context";

function AddToCartButton(props) {
  const cartCtx = useContext(CartContext);
  const addCartHandler = () => {
    cartCtx.addCartItem(props.product);
  };
  return (
    <Button className={styles.cartButton} onClick={addCartHandler}>
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
