import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Contactpic1 from "../images/Contactpic1.jpg";
import Contactpic2 from "../images/Contactpic2.jpg";
import Contactpic3 from "../images/Contactpic3.jpg";

const Contact = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    window.location.reload();
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main_contact">
        <div className="con_head">
          <h2>Contact us</h2>
        </div>
        <div className="con_list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i
                class="fa-regular fa-greater-than"
                style={{ marginRight: "10px" }}
              ></i>
              Contact Us
            </li>
          </ul>
        </div>
        <div className="Contact">
          <div className="photos">
            <div className="photo1">
              <img src={Contactpic1} className="contact_img1" />
            </div>
            <div className="photo2">
              <img src={Contactpic2} className="contact_img2" />
            </div>
            <div className="photo1">
              <img src={Contactpic3} className="contact_img3" />
            </div>
          </div>

          <div className="form1">
            <Form onChange={onChange}>
              <Row className="contact_row">
                <Col>
                  <Form.Control
                    className="input_con"
                    name="firstname"
                    placeholder="First name"
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="input_con"
                    name="lastname"
                    placeholder="Last name"
                  />
                </Col>
              </Row>
              <Row className="contact_row">
                <Col>
                  <Form.Control
                    className="input_con"
                    name="email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="input_con"
                    name="phone"
                    placeholder="Phone No."
                  />
                </Col>
              </Row>
              <Row className="contact_row">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    className="text_con"
                    name="message"
                    placeholder="Message"
                    rows={5}
                  />
                </Form.Group>
              </Row>
              <button className="contact_btnn" onClick={submitHandler}>
                Submit Now
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
