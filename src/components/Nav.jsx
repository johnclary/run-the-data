import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Nav(props) {
  return (
    <Row className="justify-content-end">
      {props.links.map((l, i) => {
        return (
          <Col md={1} key={i}>
            <Link to={l.href} alt={l.name} className="text-reset">
              <p className="text-right">{l.name}</p>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
