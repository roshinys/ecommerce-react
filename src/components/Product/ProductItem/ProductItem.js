import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./ProductItem.module.css";
import CartContext from "../../../store/Cart/cart-context";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);

  const addCartHandler = () => {
    cartCtx.addCartItem(props.product);
  };

  return (
    <Card key={props.product.id} className={styles.slideItem}>
      <Card.Img
        variant="top"
        src={props.product.image}
        className={styles.image}
      />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>Price: ${props.product.price.toFixed(2)}</Card.Text>
        <Button className={styles.cartButton} onClick={addCartHandler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
