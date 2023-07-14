import React, { useContext } from "react";
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

  return (
    <div className={styles.productContainer}>
      <ProductImage product={product} />
      <div>
        <ProductPricing product={product} />
        <ProductReview />
      </div>
    </div>
  );
}

export default ProductDetail;
