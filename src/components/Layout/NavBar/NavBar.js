import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Modal from "../../UI/Modal/Modal";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`;
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`;
            }}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`;
            }}
            to="/about"
          >
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <Modal />
    </Navbar>
  );
}

export default NavBar;
