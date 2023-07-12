import React from "react";
import ProductList from "../ProductList/ProductList";
import { Container } from "react-bootstrap";
import styles from "./Product.module.css";

function Product() {
  return (
    <Container className={styles.productContainer}>
      <h3 className={styles.title}>Products</h3>
      <ProductList />
    </Container>
  );
}

export default Product;
