import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";
import styles from "./WebInfo.module.css";

function WebInfo() {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <div className={styles.webTitle}>
            <h1>Shop It</h1>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.referenceLink}>
            <Link
              to="https://www.linkedin.com/in/roshin-y-s-346952219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#050505" }} />
            </Link>
            <Link
              to="https://github.com/roshinys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: "#050505" }} />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#050505" }} />
            </Link>
          </div>
        </Col>
        <Col md={{ offset: 2 }}></Col>
      </Row>
    </div>
  );
}

export default WebInfo;
