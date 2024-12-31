import React from "react";
import { LocalShipping, Build, ForkRight, Public, Memory, ThumbUp } from "@mui/icons-material";
import LazyLoad from "react-lazyload";
import "animate.css";
import { Container, Grid, Typography, Box, Card, CardContent, CardHeader, Avatar } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <>
      <LazyLoad offset={20} once>
        <Container className="mar-top stylish-container" id="Why Choose Us" sx={{ width: '80%' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h5 className="fanta red stylish-heading" style={{ textAlign: "center", marginBottom: "8px" }}>WHY CHOOSE US</h5>
                <h4 className="fanta stylish-subheading" style={{ textAlign: "center", marginBottom: "8px" }}>EXPERIENCE EXCELLENCE</h4>
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
                  At The Pak Enterprises, we stand out by offering unparalleled
                  expertise, innovative solutions, and a commitment to customer
                  satisfaction, ensuring your logistics needs are met with
                  precision and care.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className="service-center animate__animated animate__fadeInBottomRight">
              <Grid container spacing={3} justifyContent="center">
                {[
                  { icon: <LocalShipping />, title: "Reliable Logistics", description: "Our logistics solutions are designed to connect industries and nations, ensuring your goods are delivered with reliability and speed." },
                  { icon: <Build />, title: "Expert Crane Services", description: "Our crane services are unmatched across Pakistan, providing you with the best solutions for your lifting needs." },
                  { icon: <ForkRight />, title: "Efficient Fork Lifting", description: "Our team offers expert forklift solutions, optimizing your material handling and operational efficiency." },
                  { icon: <Public />, title: "Comprehensive Coverage", description: "We offer comprehensive logistics coverage across Pakistan, ensuring your needs are met wherever you are." },
                  { icon: <Memory />, title: "Advanced Technology", description: "We utilize advanced technology to streamline operations and enhance service delivery." },
                  { icon: <ThumbUp />, title: "Customer-Centric Approach", description: "Our customer-centric approach ensures that your satisfaction is our top priority." }
                ].map((reason, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                      <CardHeader
                        avatar={<Avatar>{reason.icon}</Avatar>}
                        title={reason.title}
                        titleTypographyProps={{ align: "center" }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {reason.description}
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

export default WhyChooseUs;