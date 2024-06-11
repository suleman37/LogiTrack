import React from "react";
import "./services.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../Cards/Cards";
import crane from "../Assets/crane.jpg";
import lifter from "../Assets/lifter.jpg";
import pk from "../Assets/Trailer.jpg";
import crane_icon from "../Assets/cr-icon.png";
import lifter_icon from "../Assets/lifter-icon.png";
import road_icon from "../Assets/truck.png";
import LazyLoad from "react-lazyload";
import "animate.css";

const services = () => {
  return (
    <>
      <LazyLoad offset={20} once>
        <Container className="mar-top" id="Our Services">
          <Row>
            <Col className="center">
              <h5 className="fanta red mt-5 animate__animated animate__fadeInTopLeft">
                Our Services
              </h5>
              <h4 className="fanta animate__animated animate__fadeInTopRight">
                WE PROVIDE BEST SERVICES
              </h4>
              <div
                className="hr animate__animated animate__fadeInTopLeft"
                style={{ height: "4px" }}
              />
              <p className="para mt-3 animate__animated animate__fadeInBottomRight">
                At The Pak Enterprises, we pride ourselves on delivering
                exceptional services, including reliable deliveries, and
                responsive customer support, ensuring peace of mind and
                satisfaction for all our clients.
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="service-center animate__animated animate__fadeInBottomRight">
              <Card
                img={pk}
                icon={road_icon}
                heading="Road Fridge"
                decription="A cornerstone of logistics, connects industries & nations, propelling goods across vast distances with reliability and speed."
              />
              <Card
                img={crane}
                icon={crane_icon}
                heading="Crane Services"
                decription="We pride ourselves on providing the best Cranes Services Avaliable in All over the Pakistan. Contact Us now"
              />
              <Card
                img={lifter}
                icon={lifter_icon}
                heading="Fork Lifter"
                decription="Our expert team offers top-notch forklift solutions, ensuring seamless material handling and optimized operations."
              />
            </Col>
          </Row>
        </Container>
      </LazyLoad>
    </>
  );
};

export default services;
