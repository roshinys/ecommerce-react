import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Modal from "../../UI/Modal/Modal";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className={styles.link}>Home</Nav.Link>
          <Nav.Link className={styles.link}>Shop</Nav.Link>
          <Nav.Link className={styles.link}>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Modal />
    </Navbar>
  );
}

export default NavBar;
