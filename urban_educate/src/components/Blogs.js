import React from "react";
import Card from "react-bootstrap/Card";
import crousel1 from "../images/crousel1.jpeg";
import crousel2 from "../images/crousel2.jpeg";
import crousel3 from "../images/crousel3.jpeg";
import crousel4 from "../images/crousel4.jpeg";

const Blogs = () => {
  return (
    <>
      <div className="main_blog">
        <div className="blog_head">
          <h2>BLOG</h2>
        </div>
        <div className="blog_list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i
                class="fa-regular fa-greater-than"
                style={{ marginRight: "10px" }}
              ></i>
              Blog
            </li>
          </ul>
        </div>

        <div className="blog">
          <div className="blog1">
            <Card className="blog_card">
              <Card.Body>
                <Card.Title className="card_title1">
                  Paperless Management.
                </Card.Title>
                <Card.Text className="card_para">
                  From the day a student takes admission in the coaching, till
                  his last exam there are sevral events which requires a lot of
                  paper work just for information sharing or other usage. our
                  goal is to replace that tedious management system with more
                  efficient way.
                </Card.Text>
                <Card.Img variant="top" src={crousel3} className="blog_img" />
              </Card.Body>
            </Card>

            <Card className="blog_card">
              <Card.Body>
                <Card.Title className="card_title1">
                  Don't stop your growth at lock down.
                </Card.Title>
                <Card.Text className="card_para">
                  Due to pandemic most of the coaching are closed and they are
                  not able to do any kind of activity or conduct classes. which
                  is making the coaching growth questionable at some extent.
                </Card.Text>
                <Card.Img variant="top" className="blog_img" src={crousel2} />
              </Card.Body>
            </Card>
          </div>

          <div className="blog2">
            <Card className="blog_card ">
              <Card.Body>
                <Card.Title className="card_title1">
                  Conduct Exams and Quizes Online.
                </Card.Title>
                <Card.Text className="card_para">
                  Keeping Students engaged with the study at home is very
                  important task, that helps student to groom themself more.
                  just by taking regular exams or quizes will engcourage
                  students to study even at lockdown.
                </Card.Text>
                <Card.Img variant="top" src={crousel1} className="blog_img" />
              </Card.Body>
            </Card>
            <Card className="blog_card" style={{ paddingBottom: "32px" }}>
              <Card.Body style={{ paddingBottom: "0px" }}>
                <Card.Title className="card_title1">
                  Accessible by Multiple Devices.
                </Card.Title>
                <Card.Text className="card_para">
                  Coaching Staff and students carry multiple types of devices
                  like Android Devices, iOS Device, Laptop, tablet etc. and ERP
                  Software should be available at all types platform. Our
                  Software is available at all types of devices in the market.
                </Card.Text>
                <Card.Img variant="top" src={crousel4} className="blog_img" />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
