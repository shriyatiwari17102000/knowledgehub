import React from "react";

const InnerAbout = () => {
  return (
    <>
      <div className="inner_about">
        <div className="inner_head">
          <h3>OUR STEPS</h3>
        </div>
        <div className="inner_head2">
          <h1>Steps to get onboard</h1>
        </div>
        <div className="inner_icon">
          <div className="icon1">
            <div className="image_inner" style={{ marginLeft: "15rem" }}>
              <i
                class="fa-sharp fa-solid fa-square-pen"
                style={{ paddingLeft: "30px" }}
              ></i>
            </div>
            <div className="inner1">
              <h1>Choose Your Plan</h1>
              <p style={{ marginLeft: "12rem" }}>
                Choose your plan which suits you
              </p>
            </div>
          </div>
          <div className="icon1">
            <div className="image_inner" style={{ marginLeft: "4rem" }}>
              <i
                class="fa-sharp fa-solid fa-pen-nib"
                style={{ paddingLeft: "25px" }}
              ></i>
            </div>
            <div className="inner2">
              <h1>Registration</h1>
              <p>Register Your Coaching, Staff & Student</p>
            </div>
          </div>
          <div className="icon1">
            <div className="image_inner" style={{ marginRight: "15rem" }}>
              <i
                class="fa-regular fa-handshake"
                style={{ paddingLeft: "13px" }}
              ></i>
            </div>
            <div className="inner3">
              <h1>Get Started</h1>
              <p>start using our services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerAbout;
