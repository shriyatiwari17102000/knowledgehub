import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import school from "../images/school.jpg";
import Services from "./Services";
import KhLogo from "../images/KhLogo.jpg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="urban">
        <div className="top">
          <div className="contact">
            <ul>
              <li>
                {" "}
                <i
                  class="fa-sharp fa-solid fa-envelope icon"
                  style={{ fontSize: "24px" }}
                ></i>
                shriyatiwari87@gmail.com
              </li>
              <li>
                <i
                  class="fa-solid fa-phone icon"
                  style={{ fontSize: "20px" }}
                ></i>
                +91 7610102351
              </li>
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook icons2"></i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com">
                  <i className="fa-brands fa-instagram icons2"></i>
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com">
                  <i className="fa-brands fa-twitter icons2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="parent">
          <div className="image">
            <div className="nav1">
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className="container1">
                  <Nav className="head_nav">
                    <img
                      src={KhLogo}
                      style={{
                        width: "72px",
                        marginLeft: "12rem",
                        marginTop: "-56px",
                        borderRadius: "100%",
                        height: "66px",
                      }}
                    />

                    <Nav.Link className="link-1">Home</Nav.Link>

                    <div className="dropdown">
                      <button class="dropbtn">Pages</button>
                      <div class="dropdown-content">
                        <a href="#">About Us</a>
                        <a href="#">Faq</a>
                        <a href="#">Pricing Table</a>
                      </div>
                    </div>

                    <div className="dropdown">
                      <button class="dropbtn">Services</button>
                      <div class="dropdown-content">
                        <a href="#">Services</a>
                        <a href="#">Features</a>
                      </div>
                    </div>

                    <Nav.Link
                      eventKey={2}
                      className="link-2"
                      onClick={() => {
                        navigate("/blogs");
                      }}
                    >
                      Blogs
                    </Nav.Link>

                    <Nav.Link
                      eventKey={2}
                      className="link-3"
                      onClick={() => {
                        navigate("/contact");
                      }}
                    >
                      Contact Us
                    </Nav.Link>
                    <div className="btme">
                      <button
                        className="me"
                        onClick={() => {
                          navigate("/contact");
                        }}
                      >
                        Get A Demo
                      </button>
                    </div>
                  </Nav>
                </Container>
              </Navbar>
            </div>
          </div>

          <div className="box">
            <div className="box1">
              <div className="cont">
                <h3
                  style={{
                    fontSize: "22px",
                    marginTop: "6rem",
                    width: "23rem",
                    paddingLeft: "18px",
                  }}
                >
                  BRING YOUR COACHING ONLINE
                </h3>
              </div>
              <div className="cont2">
                <h1
                  style={{
                    marginTop: "10rem",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  Coaching Management Software
                </h1>
              </div>
              <div className="para">
                Manage all your Caoching Paper Work and Classes in one Software.
                Knowledge Hub provides a software solution for educational
                institutes, which can help them to run their businesses from
                anywhere and provides all tools to track your growth and status
                of your business
              </div>
              <div className="btn">
                <button className="button_h">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </>
  );
};

export default Header;
