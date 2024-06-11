import React, { useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import "./Contract.css";
import logo from "../Assets/pak-logo.png";

const Contract = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal size="lg" show={modal} onHide={() => setModal(!modal)}>
        <ModalHeader closeButton>
          <img src={logo} alt="" width={"100px"} />
        </ModalHeader>
        <ModalBody>
          <form className="pad-pop" method="POST" action="https://formspree.io/f/xayrrynw">
            <h3>Client Information:</h3>
            <label htmlFor="clientName"><b>Client Name:</b></label>
            <input type="text" id="name" name="clientName" required /><br/>

            <label htmlFor="companyName"><b>Company Name:</b></label>
            <input type="text" id="name" name="companyName" /><br/>

            <label htmlFor="address"><b>Address:</b></label>
            <input type="text" id="name" name="address" required /><br/>

            <label htmlFor="phone"><b>Phone Number:</b></label>
            <input type="text" id="name" name="phone" required /><br/>

            <label htmlFor="email"><b>Email:</b></label>
            <input type="email" id="name" name="email" required /><br/>

            <h3><b>Transport Details:</b></h3>
            <label htmlFor="pickupAddress"><b>Pickup Address:</b></label>
            <input type="text" id="name" name="pickupAddress" required /><br/>

            <label htmlFor="deliveryAddress"><b>Delivery Address:</b></label>
            <input type="text" id="name" name="deliveryAddress" required /><br/>

            <label htmlFor="date"><b>Date of Transport:</b></label>
            <input type="date" id="name" name="date" required /><br/>

            <label htmlFor="goodsType"><b>Type of Goods:</b></label>
            <input type="text" id="name" name="goodsType" required /><br/>

            <label htmlFor="weight"><b>Weight of Goods:</b></label>
            <input type="text" id="name" name="weight" required /><br/>

            <label htmlFor="instructions"><b>Special Instructions:</b></label>
            <textarea id="name" name="instructions"></textarea><br/>

            <h3>Terms and Conditions:</h3>
            <p>1. Services Provided: The Pak Enterprises agrees to transport the goods described above from the pickup address to the delivery address on the specified date.</p>
            <p>2. Payment Terms: The total cost of transportation services is PKR<input type="text" name="totalCost" id="name" required/>. A deposit of PKR<input type="text" name="deposit" id="name" required/> is required upon signing this agreement. The remaining balance is due upon delivery of the goods. Payments can be made via [payment methods].</p>
            <p>3. Responsibilities: The Pak Enterprises is responsible for providing safe and timely transportation of the goods. The client is responsible for providing accurate and complete information regarding the goods to be transported. The client must ensure that the goods are properly packaged and labeled.</p>
            <p>4. Liability: The Pak Enterprises is liable for any damage to the goods that occurs during transportation due to negligence. The client must report any damages within 24 hours of delivery. The Pak Enterprises is not liable for delays caused by circumstances beyond its control, such as weather conditions, road closures, or other unforeseen events.</p>
            <p>5. Insurance: The Pak Enterprises carries standard liability insurance. Additional insurance coverage can be purchased upon request. The client must notify The Pak Enterprises if additional insurance is required.</p>
            <p>6. Cancellations and Refunds: Cancellations made within 48 hours of the scheduled transport date will incur a fee of PKR<input type="text" id="name" name="cancellationFee" required/>. Deposits are non-refundable if cancellation is made less than 48 hours before the scheduled transport date.</p>
            <p>7. Confidentiality: Both parties agree to keep the terms of this agreement confidential and not to disclose any proprietary information to third parties.</p>
            <p>8. Governing Law: This agreement is governed by the laws of Pakistan.</p>
            <p>9. Entire Agreement: This agreement constitutes the entire understanding between the parties and supersedes all prior discussions, agreements, or understandings of any kind.</p>

            <h3>Signatures:</h3>
            <label htmlFor="clientSignature"><b>Client Signature:</b></label>
            <input type="text" id="name" name="clientSignature" required /><br/>

            <label htmlFor="clientDate"><b>Date:</b></label>
            <input type="date" id="name" name="clientDate" required /><br/>

            <label htmlFor="repSignature"><b>The Pak Enterprises Representative Signature:</b></label>
            <input type="text" id="name" name="repSignature" required /><br/>

            <label htmlFor="repDate"><b>Date:</b></label>
            <input type="date" id="name" name="repDate" required placeholder="Signature"/><br/>

            <button type="submit" className="btn-1 mt-2"><b>Submit</b></button>
          </form>
        </ModalBody>
      </Modal>
      <Container>
        <Row>
          <Col className="center mar-top">
            <h4 className="fanta">Contract & Agreement Details</h4>
            <div className="hr" style={{ height: "4px" }} />
            <br />
          </Col>
        </Row>
        <Row>
          <Col className="f-center contract">
            <img src={logo} alt="" id="tpe" />
            <h2 className="font">
              Pakistan's Leading Contract
              <br /> Logistics Provider
            </h2>
            <button className="btn-1" onClick={() => setModal(true)}><b>Make Custom Request</b></button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contract;