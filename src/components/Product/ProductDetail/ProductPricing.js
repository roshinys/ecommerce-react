import React from "react";
import styles from "./ProductPricing.module.css";

function ProductPricing(props) {
  return (
    <div className={styles.productDetails}>
      <h2>{props.product.title}</h2>
      <span>
        <span className={styles.boldText}>Price</span>: ${props.product.price}
      </span>
      <p>
        {props.product.description} These CSS styles define the dimensions of
        the main-image-container and control the overflow to create a zoomed
        effect within the specified area. Adjust the size of the
        main-image-container as per your requirements to achieve the desired
        zoomed area. With these updates, the zoom effect will be limited to the
        area defined by the main-image-container, providing a zoomed-in effect
        within that specific area.
      </p>
      <span>
        <span className={styles.boldText}>Reviews</span>:{" "}
        {props.onGetRating(4.5)}
      </span>
    </div>
  );
}

export default ProductPricing;
