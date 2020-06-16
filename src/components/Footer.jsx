import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer(props) {
  return (
    <Row>
      <Col>
        <p className="text-center">
          <small>
            Created By{" "}
            <a href="https://github.com/johnclary/">John Clary</a>
            {" "}|{" "}Copyright (C) 2020{" "}|{" "}
            <a href="">MIT License</a>
          </small>
        </p>
      </Col>
    </Row>
  );
}
