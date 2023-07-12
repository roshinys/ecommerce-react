import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Home.module.css";

function Home() {
  return (
    <Container>
      <Row>
        <Col className={styles.column}>
          <h1>ShopIt</h1>
          <span>Welcome To Our ShopIt</span>
        </Col>
        <Col className={styles.column}>
          <img
            className={styles.image}
            src="https://ae01.alicdn.com/kf/HTB1UvGld.z.BuNjt_j7q6x0nFXaC/2018-new-3D-printing-One-Piece-anime-style-funny-hoodie-sweatshirt-cute-men-s-hoodie-and.jpg"
            alt="one piece"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
