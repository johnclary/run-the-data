import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LINKS = [
  { href: "/", name: "home" },
  {
    href: "https://evictions.runthedata.io",
    name: "evictions",
    external: true,
  },
  { href: "/about", name: "about" },
];

export default function Nav() {
  return (
    <Row className="my-3 justify-content-end">
      {LINKS.map((l, i) => {
        return (
          <Col md={1} key={i}>
            {l.external && <a href={l.href}>{l.name}</a>}
            {!l.external && (
              <Link to={l.href} alt={l.name}>
                <p className="text-right">{l.name}</p>
              </Link>
            )}
          </Col>
        );
      })}
    </Row>
  );
}
