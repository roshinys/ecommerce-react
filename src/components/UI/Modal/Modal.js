import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Modal.module.css";
import Cart from "../../Cart/Cart/Cart";
import CartContext from "../../../store/Cart/cart-context";

const ModalContainer = (props) => {
  return (
    <Modal show={props.showCart} onHide={props.onClick}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart />
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.button} onClick={props.onClick}>
          Close
        </button>
        <button className={`${styles.button} ${styles.orderButton}`}>
          Order
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const MyComponent = () => {
  const cartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const handleShowModal = () => {
    setShowCart(true);
  };

  const handleCloseModal = () => {
    setShowCart(false);
  };

  return (
    <>
      <button className={styles.button} onClick={handleShowModal}>
        Cart - {cartCtx.cartItemsCount}
      </button>
      <ModalContainer showCart={showCart} onClick={handleCloseModal} />
    </>
  );
};

export default MyComponent;
