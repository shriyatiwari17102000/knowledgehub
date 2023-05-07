import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import crousel1 from "../images/crousel1.jpeg";
import crousel2 from "../images/crousel2.jpeg";
import crousel3 from "../images/crousel3.jpeg";
import crousel4 from "../images/crousel4.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReasonToChoose = () => {
  return (
    <>
      <div className="reason">
        <div className="reason_head">
          <h6>Reason To Change</h6>
          <h2>How we add value in your Organisation</h2>
        </div>

        <Container>
          <Carousel>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <div className="reason_img">
                      <img
                        className="d-block w-100"
                        src={crousel3}
                        alt="First slide"
                      />
                    </div>
                    <Carousel.Caption>
                      <h5>First slide label</h5>

                      <h3>
                        Manage all task using our portal, which can provide high
                        availability for every one
                      </h3>

                      <p>
                        From the day a student takes admission in the school,
                        till his last exam there are sevral events which
                        requires a lot of paper work just for information
                        sharing or other usage. our goal is to replace that
                        tedious management system with more efficient way.
                      </p>
                      <div className="reason_btn">
                        <button>Read More</button>
                      </div>
                    </Carousel.Caption>
                  </Col>
                  <Col>2 of 3</Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={crousel2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Don't stop your growth at lock down</h5>

                <h3>
                  Conduct all the classes and manage school from home at the
                  time of pandemic.
                </h3>

                <p>
                  Due to pandemic most of the schools are closed and they are
                  not able to do any kind of activity or conduct classes. which
                  is making the school growth questionable at some extent.
                </p>
                <div className="reason_btn">
                  <button>Read More</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        {/* 
          <Carousel.Item>
            <img className="d-block w-100" src={crousel1} alt="Third slide" />
            <Carousel.Caption>
              <h6>Conduct Exams and Quizes Online</h6>
              <h3>
                Teachers can schedule exams and quizes online for their
                students, which can be attempted at home by students
              </h3>
              <p>
                Keeping Students engaged with the study at home is very
                important task, that helps student to groom themself more. just
                by taking regular exams or quizes will engcourage students to
                study even at lockdown.
              </p>
              <div className="reason_btn">
                <button>Read More</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={crousel4} alt="Fourth slide" />
            <Carousel.Caption>
              <h6>Accessible by Multiple Devices</h6>
              <h3>Supported by all Platform</h3>
              <p>
                School Staff and students carry multiple types of devices like
                Android Devices, iOS Device, Laptop, tablet etc. and ERP
                Software should be available at all types platform. Our Software
                is available at all types of devices in the market.
              </p>
              <div className="reason_btn">
                <button>Read More</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item> */}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ReasonToChoose;
