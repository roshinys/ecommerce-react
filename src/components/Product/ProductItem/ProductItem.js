import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../../UI/Button/AddToCartButton";

function ProductItem(props) {
  return (
    <Card key={props.product.id} className={styles.slideItem}>
      <Link to={`/shop/${props.product.id}`}>
        <Card.Img
          variant="top"
          src={props.product.images[0]}
          className={styles.image}
        />
      </Link>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>Price: ${props.product.price.toFixed(2)}</Card.Text>
        <AddToCartButton product={props.product} />
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
