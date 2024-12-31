import React from 'react';
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Assets/pak-logo.png";
import Phone from "../Assets/phone.png"
import email from "../Assets/email.png"
import location from "../Assets/location.png"

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-bg">
        <Container>
        <Row>
            <Col md={4}>
            <img src={Logo} alt="" width={"200px"}/>
            <p className='white'>The Pak Enterprises is a global supplier of transport and logistics solutions.</p>
            </Col>
            <Col md={4}>
            <h3 className='white'>Head Office</h3>
            <div>
            <div className='flex'>
            <img src={Phone} className='whi' alt="" width={"30px"} />
            <p className='white'>+92 51 2358086</p>
            </div>
            <div className="flex mt-2">
            <img src={email} className='whi' alt="" width={"30px"} />
            <p className='white'>info@thepakenterprises.com</p>
            </div>
           <div className="flex mt-2">
           <img src={location} className='whi' alt="" width={"30px"} />
           <p className='white'>United Asia Tower, Main GT Road, Tarnol, Islamabad Pakistan</p>
           </div>
            </div>
            </Col>
            <Col md={4}>
            <h3 className='white'>Branch Office</h3>
            <div>
            <div className='flex'>
            <img src={Phone} className='whi' alt="" width={"30px"} />
            <p className='white'>+92 300 8222926</p>
            </div>
            <div className="flex mt-2">
            <img src={email} className='whi' alt="" width={"30px"} />
            <p className='white'>umair@thepakenterprises.com</p>
            </div>
           <div className="flex mt-2">
           <img src={location} className='whi' alt="" width={"30px"} />
           <p className='white'>14-B, Ground Floor, Business Avenue Shahra-e-Fasil, Karachi, Pakistan
           </p>
           </div>
            </div>
            </Col>
        </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer