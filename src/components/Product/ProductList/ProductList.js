import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Styles from "./ProductList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button/Button";

const products = [
  {
    id: 1,
    title: "T-Shirt",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
    description: "Its a t-shirt",
    price: 9.99,
  },
  {
    id: 2,
    title: "Bag",
    image:
      "https://sp.yimg.com/ib/th?id=OPA.y2WQ1DOy2RutBQ474C474&o=5&pid=21.1&w=&h=",
    description: "Good Bag",
    price: 10.99,
  },
  {
    id: 3,
    title: "Mobile Phone",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.Zhk0uCJ3ONbrpiAOQoXZEAHaHa&pid=Api&P=0&h=180",
    description: "New Mobile Phone",
    price: 199.99,
  },
  {
    id: 4,
    title: "T-Shirt",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
    description: "Its a t-shirt",
    price: 9.99,
  },

  {
    id: 5,
    title: "T-Shirt",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.X4AWKHeMBueGDMqOXZ9vegAAAA&pid=Api&P=0&h=180",
    description: "Its a t-shirt",
    price: 9.99,
  },
];

function ProductList() {
  const [startIndex, setStartIndex] = useState(0);

  const handleSlideNext = () => {
    const nextIndex = startIndex + 3;
    setStartIndex(nextIndex >= products.length ? 0 : nextIndex);
  };

  const handleSlidePrev = () => {
    const prevIndex = startIndex - 3;
    setStartIndex(prevIndex <= 0 ? 0 : prevIndex);
  };

  const visibleProducts = products.slice(startIndex, startIndex + 3);

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
      {startIndex + 3 <= products.length && (
        <Button className={Styles.button} onClick={handleSlideNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </div>
  );
}

export default ProductList;
