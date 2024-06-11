import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from '../ChoiceSlider/CardData';


const choice = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="center mar-top mt-5">
            <h5 className="fanta red">OUR BENEFITS</h5>
            <h4 className="fanta">WHY CHOOSE US</h4>
            <div className="hr" style={{ height: "4px" }} />
            <p className="para mt-3">
              At The Pak Enterprises, we pride ourselves on delivering
              exceptional services, including reliable deliveries, and
              responsive customer support, ensuring peace of mind and
              satisfaction for all our clients.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
        <Col className="service-center">
            <Slider/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default choice;
