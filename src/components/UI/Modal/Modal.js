import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.button} onClick={handleShowModal}>
        Cart
      </button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We will add cart here</p>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.button} onClick={handleCloseModal}>
            Close
          </button>
          <button className={`${styles.button} ${styles.orderButton}`}>
            Order
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyComponent;
