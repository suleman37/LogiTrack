import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { LocalShipping, DirectionsBoat, Flight } from "@mui/icons-material";

const ServicesSection = () => {
  const services = [
    {
      icon: <LocalShipping sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Road Freight",
      description: "Efficient and reliable road freight services for all your transportation needs.",
    },
    {
      icon: <DirectionsBoat sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Sea Freight",
      description: "Comprehensive sea freight solutions for global shipping.",
    },
    {
      icon: <Flight sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Air Freight",
      description: "Fast and secure air freight services to meet your urgent delivery requirements.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "3rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginBottom: "2rem" }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ width: "87%" }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 5, borderRadius: "12px", backgroundColor: "#ffffff", height: "100%" }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                {service.icon}
                <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginTop: "1rem" }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: "#444", marginTop: "0.5rem", fontFamily: "Arial, sans-serif" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;