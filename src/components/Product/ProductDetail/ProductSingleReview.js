import React from "react";
import { ListGroup } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductSingleReview.module.css";

function ProductSingleReview(props) {
  return (
    <ListGroup.Item>
      <div className={styles.userDetail}>
        <FontAwesomeIcon icon={faUser} />
        <span>{props.review.username}</span>
      </div>
      <div>
        <p>{props.onGetRating(props.review.rating)}</p>
        <p>{props.review.reviewText}</p>
      </div>
    </ListGroup.Item>
  );
}

export default ProductSingleReview;
