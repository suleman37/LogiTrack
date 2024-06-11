import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Card from "../ContactCard/ContactCard";
import Phone from "../Assets/phone.png"
import email from "../Assets/email.png"
import location from "../Assets/location.png"

const Contact = () => {
  return (
    <>
        <Container className="mar-top" id="Contact Us">
        <Row>
          <Col className="center">
            <h5 className="fanta red mt-5">Contact Us</h5>
            <h4 className="fanta">YOU CAN REACH US WITH</h4>
            <div className="hr" style={{ height: "4px" }} />
            <p className="para mt-3">At The Pak Enterprises, we pride ourselves on delivering exceptional services, including reliable deliveries, and responsive customer support, ensuring peace of mind and satisfaction for all our clients.</p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col className="service-center">
          <Card icons={email} heading="Email" decription="info@thepakenterprises.com"/>
          <Card icons={Phone} heading="Phone Number" decription="+92 51 2358086" dec="+92 51 2358186"/>
          <Card icons={location}  heading="Offical Address" decription="United Asia Tower, Main GT Road, Tarnol, Islamabad, Pakistan"/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact;