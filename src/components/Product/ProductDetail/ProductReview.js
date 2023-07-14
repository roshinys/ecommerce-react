import React from "react";
import ProductSingleReview from "./ProductSingleReview";
import styles from "./ProductReview.module.css";
import { ListGroup } from "react-bootstrap";

function ProductReview(props) {
  const dummy_reviews = [
    {
      id: 1,
      username: "user1",
      reviewText: "Amazing Product",
      rating: 4,
    },
    {
      id: 2,
      username: "user2",
      reviewText: "Nice T-shirt",
      rating: 5,
    },
    {
      id: 3,
      username: "user3",
      reviewText: "Bad Clothing",
      rating: 1,
    },
  ];
  return (
    <ListGroup className={styles.scrollableContainer}>
      {dummy_reviews.map((review) => {
        return (
          <ProductSingleReview
            key={review.id}
            review={review}
            onGetRating={props.onGetRating}
          />
        );
      })}
    </ListGroup>
  );
}

export default ProductReview;
