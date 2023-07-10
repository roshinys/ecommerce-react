import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function WebInfo() {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <FontAwesomeIcon icon={faBarcode} />
        </Col>
        <Col xs={4}>
          <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
          </Row>
        </Col>
        <Col md={{ offset: 2 }}>4</Col>
      </Row>
    </div>
  );
}

export default WebInfo;
