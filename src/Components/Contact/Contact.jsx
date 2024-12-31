import React from "react";
import LazyLoad from "react-lazyload";
import "animate.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const dummyCenter = {
  lat: 0.0, // Dummy latitude
  lng: 0.0, // Dummy longitude
};

const Contact = () => {
  return (
    <>
      <LazyLoad offset={20} once>
        <Container
          className="mar-top stylish-container"
          id="Contact Us"
          sx={{ width: "80%" }}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h5 className="fanta red stylish-heading" style={{ textAlign: "center" }}>CONTACT US</h5>
                <h4 className="fanta stylish-subheading" style={{ textAlign: "center" }}>We'd Love to Hear From You</h4>
              </Grid>
              <Grid item>
                <Box
                  className="hr animate__animated animate__fadeInTopLeft stylish-divider"
                  sx={{ height: "4px", marginTop: "8px" }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Box
                className="hr animate__animated animate__fadeInTopLeft stylish-divider"
                sx={{ height: "4px", marginTop: "8px", backgroundColor: "#ff6347", width: "50%" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                className="para animate__animated animate__fadeInBottomRight stylish-paragraph"
                sx={{ textAlign: "center", color: "#555", lineHeight: "1.6" }}
              >
                Whether you have a question about our services, pricing, or
                anything else, our team is ready to answer all your questions.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid
              item
              xs={12}
              sm={6}
              className="map-container animate__animated animate__fadeInBottomRight"
              sx={{ padding: "10px" }}
            >
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={dummyCenter}
                  zoom={1}
                >
                  <Marker position={dummyCenter} />
                </GoogleMap>
              </LoadScript>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="contact-form animate__animated animate__fadeInBottomRight"
              sx={{ padding: "10px" }}
            >
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
              />
              <Button
                className="btn-1"
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#ff6347", color: "white", marginTop: "10px", padding: "10px 20px", fontWeight: "bold", letterSpacing: "1px" }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Container>
      </LazyLoad>
    </>
  );
};

export default Contact;