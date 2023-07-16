import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css";
import Modal from "../../UI/Modal/Modal";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/Auth/auth-context";

function NavBar() {
  const authCtx = useContext(AuthContext);
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
          {authCtx.isLoggedIn && (
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
          )}
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
          {!authCtx.isLoggedIn && (
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`;
              }}
              to="/login"
            >
              Login
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`;
            }}
            to="/contact"
          >
            Contact-Us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      {authCtx.isLoggedIn && <Modal />}
    </Navbar>
  );
}

export default NavBar;
