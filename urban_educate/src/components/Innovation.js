import React from "react";
import innovation2 from "../images/innovation2.jpg";
import innovation1 from "../images/innovation1.jpg";
import innovation3 from "../images/innovation3.jpg";
import ReasonToChoose from "./ReasonToChoose";
import Footer from "./Footer";

const Innovation = () => {
  return (
    <>
      <div className="innovation">
        <div className="inn_h">
          <h6>INNOVATION</h6>
          <h2>Our Upcoming Products.</h2>
        </div>
        <div className="inn_img1">
          <img src={innovation1} className="inn_img" />
          <img src={innovation2} className="inn_img" />
          <img src={innovation3} className="inn_img" />
        </div>
      </div>

      {/* <ReasonToChoose /> */}
      <Footer />
    </>
  );
};

export default Innovation;
