import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Innovation from "./Innovation";

const PricingTable = () => {
  return (
    <>
      <div className="pricing">
        <div className="price_head">
          <h6>PRICING TABLE</h6>
          <h2>Choose A Plan That's right For You</h2>
        </div>
        <div className="price_card">
          <Card className="price_card1" style={{ width: "18rem" }}>
            <h2 style={{ marginBottom: "2rem" }}>Monthly Plan</h2>
            <Card.Img variant="top" src="holder.js/100px180" />
            <h4 style={{ marginBottom: "0.7rem" }}>₹ 1/Student/Month</h4>
            <Card.Body>
              <Card.Text className="para_price">
                1 Year Free Trial Video Lectures Support iOS & Android Mobile
                Apps Multiple Dashboard Support All Common Modules SMS & Mobile
                Notifications 24X7 Support
              </Card.Text>
              <Button className="btn_pt">Start Now</Button>
            </Card.Body>
          </Card>

          <Card className="price_card1" style={{ paddingBottom: "31rem" }}>
            <h2>Yearly Plan</h2>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <h4>17% off ₹10 /Student/Year</h4>
              <Card.Text className="para_price">
                1 Year Free Trial Video Lectures Support iOS & Android Mobile
                Apps Multiple Dashboard Support All Common Modules SMS & Mobile
                Notifications 24X7 Support
              </Card.Text>
              <Button className="btn_pt">Start Now</Button>
            </Card.Body>
          </Card>

          <Card className="price_card1" style={{ width: "18rem" }}>
            <h2>Custom Plan</h2>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <h4>Contact Us</h4>
              <Card.Text className="para_price">
                1 Year Free Trial Video Lectures Support iOS & Android Mobile
                Apps Multiple Dashboard Support All Common Modules SMS & Mobile
                Notifications 24X7 Support
              </Card.Text>
              <Button className="btn_pt">Start Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Innovation />
    </>
  );
};

export default PricingTable;
