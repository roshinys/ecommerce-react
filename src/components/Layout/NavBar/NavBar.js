import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className={styles.link}>Home</Nav.Link>
            <Nav.Link className={styles.link}>Shop</Nav.Link>
            <Nav.Link className={styles.link}>About</Nav.Link>
            <Nav.Link className={styles.link}>Button</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
