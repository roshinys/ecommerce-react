import React, { useState, useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Styles from "./ProductList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button/Button";
import ProductContext from "../../../store/Product/product-context";

function ProductList() {
  const prodCtx = useContext(ProductContext);
  const [startIndex, setStartIndex] = useState(0);

  const handleSlideNext = () => {
    const nextIndex = startIndex + 3;
    setStartIndex(nextIndex >= prodCtx.products.length ? 0 : nextIndex);
  };

  const handleSlidePrev = () => {
    const prevIndex = startIndex - 3;
    setStartIndex(prevIndex <= 0 ? 0 : prevIndex);
  };

  const visibleProducts = prodCtx.products.slice(startIndex, startIndex + 3);

  return (
    <div className={Styles.productSlider}>
      {startIndex !== 0 && (
        <Button className={Styles.button} onClick={handleSlidePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      )}
      {visibleProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
      {startIndex + 3 <= prodCtx.products.length && (
        <Button className={Styles.button} onClick={handleSlideNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </div>
  );
}

export default ProductList;
