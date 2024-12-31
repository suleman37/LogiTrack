import React from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Grid } from "@mui/material";
import { CheckCircleOutline, LocalShipping, AccessTime } from "@mui/icons-material";
import Img from "../Assets/truck-logistics-operation-dusk.jpg";

const TrackingSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "3rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "3rem",
          width: "85%",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
        }}
      >
        {/* Image Section */}
        <Box sx={{ width: "30%", textAlign: "right", marginRight: "1.5rem" }}>
          <img
            src={Img}
            alt="Transportation"
            style={{ maxWidth: "100%", height: "auto", boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", borderRadius: "12px" }}
          />
        </Box>

        {/* Text Content */}
        <Box sx={{ width: "65%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
            Experience the Pinnacle of{" "}
            <span style={{ color: "#ff5722" }}>Transportation</span> Services
          </Typography>
          <Typography sx={{ color: "#444", marginTop: "1rem", fontFamily: "Arial, sans-serif" }}>
            Our services are designed to move you forward with ease and efficiency. We ensure that every journey is smooth and hassle-free.
          </Typography>
          <Typography sx={{ color: "#444", marginTop: "1rem", fontFamily: "Arial, sans-serif" }}>
            With our state-of-the-art logistics, we connect you to the world, making your travel and transport needs seamless and reliable.
          </Typography>
          <Box sx={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
              <CheckCircleOutline sx={{ color: "#ff5722", fontSize: "2.5rem", marginRight: "0.75rem" }} />
              <Typography sx={{ color: "#333", fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>Reliable Service</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
              <LocalShipping sx={{ color: "#ff5722", fontSize: "2.5rem", marginRight: "0.75rem" }} />
              <Typography sx={{ color: "#333", fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>Fast Delivery</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
              <AccessTime sx={{ color: "#ff5722", fontSize: "2.5rem", marginRight: "0.75rem" }} />
              <Typography sx={{ color: "#333", fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>24/7 Support</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingSection;