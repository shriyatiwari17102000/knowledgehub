import React from "react";
import About from "../components/About";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <>
      <div className="service">
        <Container>
          <Row>
            <Col>
              <div className="service_head">
                <h6>OUR SERVICES</h6>
              </div>
              <div className="service_head2">
                {" "}
                <h2>We are Providing digital Service</h2>
              </div>
            </Col>

            <Col style={{ width: "20rem", margin: "7rem 3rem" }}>
              <Card className="card_1 service_card">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Attendence Management</Card.Title>
                  <Card.Text>
                    This Module is used for maintaining the attendance of
                    Students and Teachers, which can be shown in the graphical
                    format in the dashbard of respective user.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ width: "20rem", margin: "7rem -1rem" }}>
              {" "}
              <Card className=" card_2 service_card">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Video Lectures</Card.Title>
                  <Card.Text>
                    Teachers can upload the Video Lectures after the recording
                    the class video or they can schedule the live classes for
                    students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              style={{ margin: "-20rem -7rem -6rem -7rem", padding: "9rem" }}
            >
              {" "}
              <Card className=" card_3 service_card">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Fees Management</Card.Title>
                  <Card.Text>
                    Coaching Admin can manage the fees and fine of every student
                    either class wise or branch wise, which will be reflected at
                    the all dashboards in real time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: "-4rem 1rem 2rem ", padding: "9px" }}>
              <Card className=" card_4 service_card">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Exam & Quiz Management</Card.Title>
                  <Card.Text>
                    Teachers can set different varity of questions with their
                    right answers and respective marks of each questions for
                    exam and result can be auto calculated for the MCQs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              style={{ width: "20rem", margin: "-3.4rem 3rem -3.4rem 1.5rem" }}
            >
              <Card className="card_Five service_card">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Assignment & Project Management</Card.Title>
                  <Card.Text>
                    Teachers can upload the Homework or Assignment for the
                    students of a particular class or section and after
                    completion of assignment students can upload the answers
                    sheet in the App/Site for Evaluation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <About />
    </>
  );
};

export default Services;
