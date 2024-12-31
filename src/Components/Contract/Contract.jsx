import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Grid, Box } from "@mui/material"; // Importing missing components
import "./Contract.css";
import logo from "../Assets/pak-logo.png";

const Contract = () => {
  return (
    <Container className="mt-5">
      <Row>
      <Grid container direction="column" alignItems="center">
          <Grid item>
            <h5 className="fanta red stylish-heading" style={{ textAlign: "center"}}>DETAILS</h5>
            <h4 className="fanta stylish-subheading" style={{ textAlign: "center"}}>Contract & Agreement Details</h4>
          </Grid>
          <Grid item>
            <Box
              className="hr animate__animated animate__fadeInTopLeft stylish-divider"
              sx={{ height: "4px", marginTop: "8px" }}
            />
          </Grid>
        </Grid>
      </Row>
      <Row>
        <Col className="f-center contract" style={{ marginTop: "-10px" }}>
          <img src={logo} alt="" id="tpe" />
          <h2 className="font">
            Pakistan's Leading Contract
            <br /> Logistics Provider
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Contract;