import React, { useState } from "react";
import styles from "./ProductImage.module.css";
import AddToCartButton from "../../UI/Button/AddToCartButton";

function ProductImage({ product }) {
  const [zoomed, setZoomed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const handleZoomToggle = () => {
    setZoomed(!zoomed);
  };
  const changeImageHandler = (e) => {
    setSelectedImage(e.target.src);
  };
  return (
    <div className={styles.productDisplay}>
      <div className={styles.productImages}>
        <div className={styles.thumbnailImages}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className={styles.thumbnailImage}
              onClick={changeImageHandler}
            />
          ))}
        </div>
        <div
          className={`${styles.mainImage} ${zoomed ? `${styles.zoomed}` : ""}`}
          onMouseEnter={handleZoomToggle}
          onMouseLeave={handleZoomToggle}
        >
          <img src={selectedImage} alt={product.title} />
        </div>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}

export default ProductImage;
