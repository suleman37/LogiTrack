import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { ThumbUp, VerifiedUser, SupportAgent, Build , TrendingUp, People} from "@mui/icons-material";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <ThumbUp sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Trusted Expertise",
      description: "Years of experience and a proven track record in delivering quality services.",
    },
    {
      icon: <VerifiedUser sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Reliable Security",
      description: "Commitment to safety and security in all our operations.",
    },
    {
      icon: <SupportAgent sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "24/7 Support",
      description: "Dedicated customer support available around the clock.",
    },
    {
      icon: <Build sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Innovative Solutions",
      description: "Cutting-edge solutions tailored to your needs.",
    },
    {
      icon: <TrendingUp sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Growth Opportunities",
      description: "Helping your business grow with our expert services.",
    },
    {
      icon: <People sx={{ color: "#ff5722", fontSize: "3rem" }} />,
      title: "Community Focused",
      description: "Engaging with and supporting our community.",
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "3rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginBottom: "2rem" }}>
        Why Choose Us
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ width: "87%" }}>
        {reasons.map((reason, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 5, borderRadius: "12px", backgroundColor: "#ffffff", height: "100%" }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                {reason.icon}
                <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", marginTop: "1rem" }}>
                  {reason.title}
                </Typography>
                <Typography sx={{ color: "#444", marginTop: "0.5rem", fontFamily: "Arial, sans-serif" }}>
                  {reason.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUsSection;