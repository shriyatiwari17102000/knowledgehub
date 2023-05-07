import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KhLogo from "../images/KhLogo.jpg";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";

const Footer = () => {
  const [state, setState] = useState({
    name: "",
  });

  const sendMessage = (e) => {
    console.log("message send");
    window.location.reload();
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main_foot">
        <div className="footer">
          <div className="footr">
            <Card className="footer1">
              <Card.Body>
                <div className="title_f">
                  <Card.Title className="card_tit">
                    Subscribe To Our Newsletter For Latest Update
                  </Card.Title>
                  <div className="footer1_input">
                    <input
                      type="text"
                      value={state.state}
                      name="name"
                      onChange={onChange}
                      placeholder="Your Email Address"
                    />
                    <button className="btn_ft" onClick={sendMessage}>
                      <i class="fa-sharp fa-solid fa-paper-plane sub_mit"></i>
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Container className="foot_cont">
          <Row>
            <Col>
              <div className="foot_img">
                <img className="foot_img1" src={KhLogo} />
              </div>
              <div className="foot_list1">
                <ul>
                  <li>
                    <i class="fa-solid fa-phone me_f "></i>
                    <span className="span_2">+91 7610102351</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-envelope me_f"></i>
                    <span className="span_2">shriyatiwari87@gmail.com.com</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-location-dot me_f"></i>
                    <span className="span_2">
                      Dhawari,lane no.1,chandmari road,satna (M.P.),485001
                    </span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col>
              <div className="our_link1">
                <div className="foot_head2">
                  <h4>Our links</h4>
                </div>
                <div className="foot_list2">
                  <ul>
                    <li>
                      <a href="/" className="foot_link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="foot_link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="foot_link">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/team" className="foot_link">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="foot_link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col>
              {" "}
              <div className="our_link2">
                <div className="foot_head2">
                  <h4>Our Services</h4>
                </div>
                <div className="foot_list2">
                  <ul>
                    <li>
                      <a href="/attendence" className="foot_link">
                        Attendence Management
                      </a>
                    </li>
                    <li>
                      <a href="/video" className="foot_link">
                        Video Lectures
                      </a>
                    </li>
                    <li>
                      <a href="/fees" className="foot_link">
                        Fees Management
                      </a>
                    </li>
                    <li>
                      <a href="/exam" className="foot_link">
                        Exam & Quiz Management
                      </a>
                    </li>
                    <li>
                      <a href="/project" className="foot_link">
                        Assignment & Project Management
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col>
              <div className="our_link2">
                <div className="foot_head2">
                  <h4>Our Apps</h4>
                </div>
                <div className="foot_list2">
                  <ul>
                    <li>
                      <a href="http://apps.apple.com">
                        <img src={appstore} className="img_store foot_link" />
                      </a>
                    </li>
                    <li>
                      <a href="http://play.google.com ">
                        <img src={playstore} className="img_store foot_link" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bottom_foot">
        <div className="btm_foot_span">
          <span className="span1">
            Copyright ©2023 Education Hub. All rights reserved.
          </span>
        </div>
        <div className="foot_icon">
          <ul>
            <li>
              <a
                className="fa-brands fa-facebook foot_icon1"
                href="https://www.facebook.com/"
              ></a>
            </li>
            <li>
              {" "}
              <a
                className="fa-brands fa-instagram foot_icon1"
                href="https://www.instagram.com/"
              ></a>
            </li>
            <li>
              {" "}
              <a
                className="fa-brands fa-twitter foot_icon1"
                href="https://www.twitter.com/"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
