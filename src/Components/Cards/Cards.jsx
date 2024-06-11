import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import logo from "../Assets/pak-logo.png";
import "./Cards.css";

const Cards = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <img src={logo} alt="" width={"100px"} />
          <br />
        </ModalHeader>
        <form className="pad-pop" method="POST" action="https://formspree.io/f/xayrrynw">
          <label><b>Client Name</b></label>
          <br />
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Enter Your Name Here"
            required
          />
          <br />
          <label><b>Company Number</b></label>
          <br />
          <input
            type="text"
            name="Company Name"
            id="name"
            placeholder="Enter Your Company Name Here"
            required
          />
          <br />
          <label><b>Address</b></label>
          <br />
          <input
            type="text"
            name="Company Address"
            id="name"
            placeholder="Enter Your Address Here"
            required
          />
          <br />
          <label><b>Phone Number</b></label>
          <br />
          <input
            type="number"
            name="Phone Number"
            id="name"
            placeholder="Enter Your Phone Number Here"
            required
          />
          <br />
          <label><b>Email</b></label>
          <br />
          <input
            type="email"
            name="Email"
            id="name"
            placeholder="Enter Your Email Address Here"
            required
          />
          <br />
          <label><b>Service Type</b></label>
          <br />
          <select name="Service" id="name" required>
            <option value="none">--SELECT--</option>
            <option value="Road Fridge">Road Fridge</option>
            <option value="Crane">Crane</option>
            <option value="Fork Lifter">Fork Lifter</option>
          </select>
          <label><b>  Pick Up Address</b></label><br />
          <input type="text" name="Pick Up Location" id="name" placeholder="Enter Your Pick Up Location" required/>
          <br />
          <label><b>Delivery Location</b></label><br />
          <input type="text" name="Delivery Location" id="name" placeholder="Enter Your Delivery Location" required/>
          <br />
          <label><b>Date</b></label><br />
          <input type="date" name="Date" id="name" placeholder="Enter Your City" required/>
          <br />
          <label><b>Goods Type</b></label><br />
          <input type="text" name="Shopping Goods" id="name" placeholder="Enter Goods Type" required/>
          <br />
          <label><b>Weight</b></label><br />
          <input type="text" name="Goods Weight" id="name" placeholder="Enter Your Weight"/>
          <br />
          <button className="btn-1 mt-2" type="Submit"><b>Submit</b></button>
        </form>
      </Modal>
      <div className="card" style={{ width: "18rem", padding: "0px" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          width={"100vw"}
          height={"200px"}
        />
        <div className="icon">
        <img src={props.icon} alt="icons" width={"60px"} className="ser-img"  onClick={() => setModal(true)}/>
        </div>
        <div className="card-body">
          <h5 className="card-title fanta">{props.heading}</h5>
          <p className="card-text gray">{props.decription}</p>
          <button className="btn btn-primary" onClick={() => setModal(true)}>
            <b>Book Now</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
