import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import 'animate.css';

const Hero = () => {
  return (
    <>
      <Container fluid className="hero-bg" id="Hero">
        <Container>
          <Row>
            <Col className="f-center">
              <h5 className="font1 animate__animated animate__backInRight">
                Delivering your goods safely and on time, every time.
              </h5>
              <h1 className="font animate__animated animate__backInLeft">
                Best Transport Services
                <br /> In Pakistan
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Hero;