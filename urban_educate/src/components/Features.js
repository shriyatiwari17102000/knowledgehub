import React from "react";
import Container from "react-bootstrap/Container";
import chartOne from "../images/chartOne.webp";
import chartTwo from "../images/chartTwo.webp";
import chartThree from "../images/chartThree.webp";
import chartFour from "../images/chartFour.webp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import PricingTable from "./PricingTable";

const Features = () => {
  return (
    <>
      <div className="feature">
        <div className="feature_head">
          <h6>Features</h6>
          <h2>Take A Look At Our Latest Features</h2>
        </div>
        <div className="navbar_ft">
          <Nav className="justify-content-center nav_n" activeKey="/home">
            <Nav.Item className="nav_item">
              <Nav.Link
                className="nav_link"
                style={{ color: "black" }}
                href="/All"
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item">
              <Nav.Link
                className="nav_link"
                style={{ color: "black" }}
                href="/Web"
              >
                Web
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item">
              <Nav.Link
                className="nav_link"
                style={{ color: "black" }}
                href="/Andriod"
              >
                Android
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item">
              <Nav.Link
                className="nav_link"
                style={{ color: "black" }}
                href="/IOS"
              >
                IOS
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Container>
          <Row>
            <Col>
              {" "}
              <img
                src={chartOne}
                className="feature_img fi"
                style={{ marginBottom: "50px" }}
              />{" "}
            </Col>
            <Col>
              <img
                className="feature_img"
                src={chartTwo}
                style={{ height: "317px" }}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="feature_img fi" src={chartThree} />
            </Col>

            <Col>
              <img className="feature_img" src={chartFour} />
            </Col>
          </Row>
        </Container>
      </div>
      <PricingTable />
    </>
  );
};

export default Features;
