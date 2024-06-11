import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import Logo from "../Assets/pak-logo.png";
import Story from "../Assets/tpe.pdf"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Pak Logo" width={"120px"} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="mini" aria-current="page" href="#Hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="mini" href="#About Us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="mini" href="#Our Services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="mini" href="#Our Team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="mini" href="#Contact Us">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex fix">
            <Button
            className="btn-1"
            type="submit"
            variant="secondary"
            href={`${Story}`}
            download="The PakEnterprises.pdf"
          >
            <b>Our Profile</b>
          </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
