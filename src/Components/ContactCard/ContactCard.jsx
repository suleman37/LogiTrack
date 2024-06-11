import React from 'react';

const ContactCard = (props) => {
  return (
    <>
        <div className="card mt-5 mb-5" style={{ width: "18rem", padding: "0px" }}>
        <div className="icon">
        <img src={props.icons} alt="icons" width={"60px"} className="ser-img"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fanta">{props.heading}</h5>
          <p className="card-text gray">{props.decription}</p>
          <p className="card-text gray">{props.dec}</p>
        </div>
      </div>
    </>
  )
}

export default ContactCard;