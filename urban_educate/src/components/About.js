import React from "react";
import coaching_img_foot from "../images/coaching_img_foot.jpg";
import { useNavigate } from "react-router-dom";
import Features from "./Features";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about_section">
        <div className="about_image">
          <img
            src={coaching_img_foot}
            style={{
              "box-sizing": "border-box",
              border: "1px solid White",
              "border-radius": " 0 100px 100px 0",
              marginTop: "80px",
              width: "600px",
            }}
          ></img>
        </div>
        <div className="about">
          <div className="head1">
            <h2>ABOUT US</h2>
          </div>
          <div className="heading">
            <h2
              style={{
                textAlign: "left",
                "margin-left": "44rem",
                fontSize: "45px",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              We Provide ERP Software <br />
              For Coaching{" "}
            </h2>
          </div>
          <div className="para1">
            <p style={{ textAlign: "left" }}>
              Urban Educate is a Company for making Coaching Service automated
              and online in an affordable price. Our mission is to make latest
              computer technology connected with the education system to get a
              better result and make the study more interactive and effective.
            </p>
          </div>
          <div className="list_a">
            <ul>
              <li>Clean UI and Easy to Use.</li>
              <li>High Performance & Automated Features.</li>
              <li>Pen & Paper Less Management.</li>
              <li>24X7 Support.</li>
            </ul>
          </div>
          <button
            className="about_btn"
            onClick={() => {
              navigate("/innerabout");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <Features />
    </>
  );
};
export default About;
