import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./second.css";
import Truck from "../Assets/truck3.jpg";
import LazyLoad from "react-lazyload";
import "animate.css";

const second = () => {
  return (
    <>
      <LazyLoad  offset={10} once>
        <Container className="mar-top" id="About Us">
          <Row>
            <Col lg={6} className="animate__animated animate__backInLeft">
              <h5 className="fanta red">INTERNATIONAL</h5>
              <h4 className="fanta">TRANSPORT COMPANY</h4>
              <div className="hr" style={{ height: "4px" }} />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                velit pharetra, consectetur quam vitae, scelerisque mauris.
                Fusce in nisl ut tellus elementum aliquam. Vivamus feugiat augue
                vel pellentesque sagittis. Sed at commodo elit. Mauris sit amet
                urna volutpat nunc ornare ullamcorper. Etiam neque metus, cursus
                id tincidunt in, cursus ut orci. Proin lobortis cursus justo,
                tincidunt egestas elit molestie nec. Ut justo eros, ultricies ac
                fermentum quis, pretium sed lorem. Pellentesque erat leo, semper
                ut ex quis, dictum consectetur lorem.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                velit pharetra, consectetur quam vitae, scelerisque
                mauris.scelerisque mauris.scelerisque mauris.
              </p>
            </Col>
            <Col
              lg={6}
              className="justify-content-center animate__animated animate__backInRight"
            >
              <img src={Truck} alt="" className="tk-img" />
            </Col>
          </Row>
        </Container>
      </LazyLoad>
    </>
  );
};

export default second;
