import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const OurPlateforms = () => {
  return (
    <>
      <div className="plateform">
        <div className="innerplate">
          <Container>
            <Row>
              <Col>
                <div className="plate_head">
                  <h6>OUR PLATEFORMS</h6>
                  <h2>Devices to Consume Our Services</h2>
                </div>
                <div className="plate_para">
                  <p>
                    We provide our services in varity of platforms like Web
                    Application, Android Mobile App, iOS Mobile App, IPad,
                    tablets etc. Students and Teachers should have either of
                    device which is mentioned to use our services.
                  </p>
                  <p>
                    For proper use of our services, user should have a decent
                    internet connectivity.
                  </p>
                </div>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Android Platform</Card.Title>
                    <Card.Text>
                      All Features are available in the Android Mobile
                      Application. any user can find our application in play
                      store by entering App Name.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Web Platform</Card.Title>
                    <Card.Text>
                      Web platform provides the detailed report of performance
                      with all the features. It can be accessed by any latest
                      browser.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>iOS Platform</Card.Title>
                    <Card.Text>
                      All features can be accessed from iOS devices as well
                      (like IPhone, IPad). user can find our Application in the
                      App Store.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default OurPlateforms;
