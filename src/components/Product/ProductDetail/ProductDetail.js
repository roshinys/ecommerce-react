import React, { useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../../store/Product/product-context";
import styles from "./ProductDetail.module.css";
import ProductReview from "./ProductReview";
import ProductPricing from "./ProductPricing";
import ProductImage from "./ProductImage";

function ProductDetail() {
  const prodCtx = useContext(ProductContext);

  const params = useParams();
  const productId = params.productId;
  const filteredProducts = prodCtx.products.filter((product) => {
    return product.id === parseInt(productId);
  });
  const product = filteredProducts[0];

  const getStarRating = useCallback((rating) => {
    const maxRating = 5;
    const filledStar = "★";
    const halfFilledStar = "½";
    const emptyStar = "☆";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;
    const filledStars = filledStar.repeat(fullStars);
    const halfFilledStars = hasHalfStar ? halfFilledStar : "";
    const emptyStars = emptyStar.repeat(
      maxRating - fullStars - (hasHalfStar ? 1 : 0)
    );
    return filledStars + halfFilledStars + emptyStars;
  }, []);

  return (
    <div className={styles.productContainer}>
      <ProductImage product={product} />
      <div>
        <ProductPricing product={product} onGetRating={getStarRating} />
        <ProductReview onGetRating={getStarRating} />
      </div>
    </div>
  );
}

export default ProductDetail;
