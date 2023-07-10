import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PageInfo.module.css";

function PageInfo() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={2}
          className={`${styles.column} ${styles.lightPinkColor}`}
        ></Col>
        <Col xs={8} className={`${styles.column} ${styles.lightBlueColor}`}>
          <Row>
            <Col xs={6}>
              <h2>Welcome to Our Online Store</h2>
              <p>Discover a wide range of products and shop with confidence.</p>
            </Col>
            <Col xs={3} className="offset-3">
              <img
                alt="Shop Cart"
                src="https://tse4.mm.bing.net/th?id=OIP._E9oo1YKd03ch0eR9hfmMwHaKX&pid=Api&P=0&h=180"
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={2}
          className={`${styles.column} ${styles.lightPurpleColor}`}
        ></Col>
      </Row>
    </Container>
  );
}

export default PageInfo;
