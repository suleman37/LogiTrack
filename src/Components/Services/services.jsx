import React from "react";
import crane from "../Assets/crane.jpg";
import lifter from "../Assets/lifter.jpg";
import pk from "../Assets/Trailer.jpg";
import crane_icon from "../Assets/cr-icon.png";
import lifter_icon from "../Assets/lifter-icon.png";
import road_icon from "../Assets/truck.png";
import LazyLoad from "react-lazyload";
import "animate.css";
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, CardHeader, Avatar } from "@mui/material";

const services = () => {
  return (
    <>
      <LazyLoad offset={20} once>
        <Container className="mar-top stylish-container" id="Our Services" sx={{ width: '80%' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h5 className="fanta red stylish-heading" style={{ textAlign: "center", marginBottom: "8px" }}>OUR SERVICES</h5>
                <h4 className="fanta stylish-subheading" style={{ textAlign: "center", marginBottom: "8px" }}>WE PROVIDE BEST SERVICES</h4>
              </Grid>
              <Grid item>
                <Box
                  className="hr animate__animated animate__fadeInTopLeft stylish-divider"
                  sx={{ height: "4px", marginTop: "8px" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  className="para animate__animated animate__fadeInBottomRight stylish-paragraph"
                  style={{ textAlign: "center" }}
                >
                  At The Pak Enterprises, we pride ourselves on delivering
                  exceptional services, including reliable deliveries, and
                  responsive customer support, ensuring peace of mind and
                  satisfaction for all our clients.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className="service-center animate__animated animate__fadeInBottomRight">
              <Grid container spacing={3} justifyContent="center">
                {[
                  { icon: road_icon, image: pk, title: "Road Fridge", description: "A cornerstone of logistics, connects industries & nations, propelling goods across vast distances with reliability and speed." },
                  { icon: crane_icon, image: crane, title: "Crane Services", description: "We pride ourselves on providing the best Cranes Services Available all over Pakistan. Contact us now." },
                  { icon: lifter_icon, image: lifter, title: "Fork Lifter", description: "Our expert team offers top-notch forklift solutions, ensuring seamless material handling and optimized operations." }
                ].map((service, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                      <CardHeader
                        avatar={<Avatar src={service.icon} />}
                        title={service.title}
                        titleTypographyProps={{ align: "center" }}
                      />
                      <CardMedia
                        component="img"
                        height="140"
                        image={service.image}
                        alt={service.title}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </LazyLoad>
    </>
  );
};

export default services;