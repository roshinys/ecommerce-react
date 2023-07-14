import React from "react";
import styles from "./ProductPricing.module.css";

function ProductPricing(props) {
  return (
    <div className={styles.productDetails}>
      <h2>{props.product.title}</h2>
      <p>Price: ${props.product.price}</p>
      <p>{props.product.description}</p>
      <span>5*</span>
    </div>
  );
}

export default ProductPricing;
