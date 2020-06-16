import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CategoryByYearChart from "./CategoryByYearChart";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function CategoryChartRow(props) {
  const expandDetailsRoute = `/details/${props.category.name}`;
  const collapseDetailsRoute = `/#${props.category.name}`;
  let collapseButtonLink = expandDetailsRoute;

  // if a category has been specified in the route path only render the chart row if this
  // components category matches the route(/:category)
  if (props.categoryRoute && props.categoryRoute !== props.category.name) {
    return null;
  } else if (
    props.categoryRoute &&
    collapseButtonLink !== collapseDetailsRoute
  ) {
    // if we meet this case, then the category details is currently displayed
    // so we want the collapse button to navigate back to home with focus on the
    // current categorie's section anchor
    collapseButtonLink = collapseDetailsRoute;
  } else {
    collapseButtonLink = expandDetailsRoute;
  }

  return (
    <Col>
      <Row>
        <Col className="p-0">
          <Button className="btn-block" variant="light" size="sm">
            <Link
              smooth
              to={collapseButtonLink}
              className="text-reset text-decoration-none"
            >
              <Row className="justify-content-between">
                <Col>
                  <h6 className="text-left">
                    <p className="text-reset">
                      {props.category.icon} {props.category.title}
                    </p>
                  </h6>
                </Col>
                <Col md={2} className="d-none d-md-block text-right">
                  {/* if a category is present, then a category "details" is currently rendered, so adjust collapse menu accordingly */}
                  {props.categoryRoute ? "Hide Details" : "Details"}{" "}
                  {props.categoryRoute ? (
                    <FaChevronCircleUp />
                  ) : (
                    <FaChevronCircleRight />
                  )}
                </Col>
                <Col xs={1} className="d-sm-block d-md-none p-0">
                  {props.categoryRoute ? (
                    <FaChevronCircleUp />
                  ) : (
                    <FaChevronCircleRight />
                  )}
                </Col>
              </Row>
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col className="p-0">
          <CategoryByYearChart data={props.data} />
        </Col>
      </Row>
    </Col>
  );
}
