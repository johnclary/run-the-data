import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./Nav";
import Footer from "./Footer";

export default function About() {
  return (
    <React.Fragment>
      <Container>
        <Nav />
        <Row>
          <Col></Col>
          <Col lg={8}>
            <h3 className="font-weight-bold">About</h3>
            <div>
              <p>
                Run the Data uses{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://data.austintexas.gov/Budget-and-Finance/Austin-Finance-Online-eCheckbook/8c6z-qnmj"
                >
                  open financial data
                </a>{" "}
                to provide insight into the way the City of Austin Police
                Department spends its money.
              </p>
              <p>
                {" "}
                You can view detailed information about the data in this
                project's{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/johnclary/run-the-data"
                >
                  Github Repository
                </a>
                .
              </p>
            </div>
            <p className="font-weight-bold">
              I'm unhappy with the state of policing in Austin. What can I do?
            </p>
            <ul>
              <li>
                Attend an{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://austindsa.org/"
                >
                  Austin DSA
                </a>{" "}
                meeting
              </li>
              <li>
                Vote and volunteer for{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.joseforda.com/"
                >
                  Jose Garza
                </a>
              </li>
              <li>
                Support and follow the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://austinjustice.org/"
                >
                  Austin Justice Coalition
                </a>
              </li>
              <li>
                Support and follow{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://justliberty.org/"
                >
                  Just Liberty
                </a>
              </li>
              <li>
                Tell{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.austintexas.gov/government"
                >
                  Mayor and City Council
                </a>{" "}
                that they should defund the Austin Police Department
              </li>
            </ul>
            <p>
              * This project is not affiliated with any of these organizations
            </p>
            <p className="font-weight-bold">
              {" "}
              I'd like to learn more about the City of Austin's budget.{" "}
            </p>
            <p>
              {" "}
              Glad to hear that. A good place to start is the City's{" "}
              <a href="http://budget.austintexas.gov/#!/year/default">
                Open Budget
              </a>{" "}
              website.
            </p>
            <p className="font-weight-bold">
              Are there any problems with this data?
            </p>
            <p>
              Yes, many! As you peruse the site, you'll notice that expenditures
              are often generic and vague. What the hell are "POLICE SUPPLIES?"
              Unfortunately, these obscurities reflect the City of Austin's
              inconsistent procedures when accounting for its expenditures.{" "}
            </p>
            <p className="font-weight-bold">I'd like to make a suggestion.</p>
            <p>
              Yes, please. DM me on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/spatialaustin"
              >
                Twitter
              </a>{" "}
              or open a new{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johnclary/run-the-data/issues"
              >
                issue
              </a>
              .
            </p>
            <p className="font-weight-bold">Acknowledgements</p>
            <p>
              Favicon and banner icons courtesy from Yu Luck, MRK, and Gajah
              Mada Studio via{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thenounproject.com/"
              >
                the noun project
              </a>
              .
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
