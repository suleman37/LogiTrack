import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Logo from "../Assets/pak-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="bg-gradient py-3 border-bottom">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="mailto:info@elexoft.com" className="contact-info me-4 text-dark text-decoration-none">
              <FaEnvelope className="me-2" /> info@thepakenterprises.com
            </a>
            <span className="divider mx-2">|</span>
            <a href="tel:+923315062911" className="contact-info me-4 text-dark text-decoration-none">
              <FaPhoneAlt className="me-2" /> +92 331 12345678
            </a>
            <span className="divider mx-2">|</span>
            <a href="tel:+923008888888" className="contact-info text-dark text-decoration-none">
              <FaPhoneAlt className="me-2" /> +92 300 8888888
            </a>
          </div>
          <Button className="btn text-white" type="button" href="#GetQuote" style={{ backgroundColor: '#ff5722', color: 'white' , border:"1px solid #ff5722"}}>
           <b>Our Profile</b>
          </Button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex flex-column align-items-center" href="/">
            <img src={Logo} alt="Logo" width={"120px"} className="mb-2" />
            <p className="mb-0"><b>The PakEnterprises</b></p>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'red' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="#Home">
                  Home
                </a>
              </li>
              <span className="divider mx-2">|</span>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Services">
                  Services
                </a>
              </li>
              <span className="divider mx-2">|</span>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Blog">
                  Blog
                </a>
              </li>
              <span className="divider mx-2">|</span>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Portfolio">
                  Portfolio
                </a>
              </li>
              <span className="divider mx-2">|</span>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Team">
                  Team
                </a>
              </li>
              <span className="divider mx-2">|</span>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;