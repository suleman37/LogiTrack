import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage1 from "../Assets/industrial-port-container-yard.jpg";
import backgroundImage2 from "../Assets/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative.jpg"; // Add more images as needed

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [backgroundImage1, backgroundImage2]; // Add more images to the array

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
              clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container sx={{ position: "relative", zIndex: 2 }}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs={12} sm={8}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      textTransform: "uppercase",
                      color: "#FF0000",
                    }}
                  >
                    Welcome to
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                  >
                    The Pak
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      mt: 2,
                    }}
                  >
                    Leading top transport logistics company in Pakistan. <br />
                    We offer our services in freight forwarding, supply chain
                    management, <br />
                    warehousing, and distribution.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default Hero;