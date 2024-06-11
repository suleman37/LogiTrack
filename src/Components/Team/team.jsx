import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CEO from "../Assets/1.png";
import MD from "../Assets/2.png";
import MR from "../Assets/3a.png";
import "./team.css";


const team = () => {
  return (
    <>
      <Container className="mar-top" id='Our Team'>
        <Row>
          <Col className="center">
            <h5 className="fanta red">CEO'S VISION</h5>
            <h4 className="fanta">CEO'S MESSAGE</h4>
            <div className="hr" style={{ height: "4px" }} />
            <p className="para mt-3">At The Pak Enterprises, we pride ourselves on delivering exceptional services, including reliable deliveries, and responsive customer support, ensuring peace of mind and satisfaction for all our clients.</p>
            <br />
          </Col>
        </Row>
        <Row>
        <Col lg={4} className="justify-content-center">
            <img
              src={CEO}
              alt="CEO'S Pic"
              width={"250px"}
              className='ceo-pic mb-4'
            />
          </Col>
          <Col lg={8}>
            <p className='gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
              velit pharetra, consectetur quam vitae, scelerisque mauris. Fusce
              in nisl ut tellus elementum aliquam. Vivamus feugiat augue vel
              pellentesque sagittis. Sed at commodo elit. Mauris sit amet urna
              volutpat nunc ornare ullamcorper. Etiam neque metus, cursus id
              tincidunt in, cursus ut orci. Proin lobortis cursus justo,
              tincidunt egestas elit molestie nec. Ut justo eros, ultricies ac
              fermentum quis, pretium sed lorem. Pellentesque erat leo, semper
              ut ex quis, dictum consectetur lorem.
              <br/>
              Ghazi Gas operates with a customer-centric ethos, transitioning from LPG imports to market expansion with a growth mindset Ghazi Gas operates with a customer-centric ethos, transitioning from LPG imports to market expansion with a growth mindset Ghazi Gas operates with a customer-centric ethos, transitioning from LPG imports to market expansion with a growth mindset
              <br/>
              <h3 className='mt-4 fanta'>Hafeez Ur Rehman</h3>
              <p className='gray'>Chief Excutive Officer(CEO)</p>
            </p>
          </Col>
        </Row>
        <Row>
            <Col  className="center mar-top">
            <h5 className="fanta red">OUR TEAM</h5>
            <h4 className="fanta">OUR GREAT TEAM</h4>
            <div className="hr" style={{ height: "4px" }} />
            </Col>
        </Row>
        <Row>
            <Col className="service-center mt-5">
            <div>
            <img src={CEO} alt=""  width={"250px"}/>
            <h6 className="fanta">Hafeez Ur Rehman</h6>
            <p className="gray">Chief Excutive Officer (CEO)</p>
            </div>
            <div>
            <img src={MD} alt=""  width={"250px"}/>
            <h6  className="fanta">Muhammad Kamran</h6>
            <p className="gray">Managing Director</p>
            </div>
            <div>
            <img src={MR} alt=""  width={"250px"}/>
            <h6 className="fanta">Muhammad Umair</h6>
            <p className="gray">Marketing Manager</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default team;