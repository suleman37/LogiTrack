import React from "react";
import { Box, Typography } from "@mui/material";
import { CheckCircleOutline, LocalShipping, AccessTime } from "@mui/icons-material";
import Img from "../Assets/truck-logistics-operation-dusk.jpg";

import icon_pk from "../Assets/westren-service.png";
import save_money from "../Assets/Screenshot-2023-08-21-133145.png";
import express from "../Assets/Screenshot-2023-08-21-133315.png";
import expert from "../Assets/Screenshot-2023-08-21-133513.png";
import online from "../Assets/1519904578831.jpeg";
import karachi from "../Assets/karachi.png";

const TrackingSection = () => (
  <Box sx={{ backgroundColor: "#f5f5f5", p: 3, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 3,
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Box sx={{ width: "30%", textAlign: "right", mr: 1.5 }}>
        <img
          src={Img}
          alt="Transportation"
          style={{ maxWidth: "100%", height: "auto", boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", borderRadius: "12px" }}
        />
      </Box>
      <Box sx={{ width: "65%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Experience the Pinnacle of <span style={{ color: "#ff5722" }}>Transportation</span> Services
        </Typography>
        <Typography sx={{ color: "#444", mt: 1, fontFamily: "Arial, sans-serif" }}>
          Our services are designed to move you forward with ease and efficiency. We ensure that every journey is smooth and hassle-free.
        </Typography>
        <Typography sx={{ color: "#444", mt: 1, fontFamily: "Arial, sans-serif" }}>
          With our state-of-the-art logistics, we connect you to the world, making your travel and transport needs seamless and reliable.
        </Typography>
        <Box sx={{ mt: 1.5, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {[
            { icon: <CheckCircleOutline />, text: "Reliable Service" },
            { icon: <LocalShipping />, text: "Fast Delivery" },
            { icon: <AccessTime />, text: "24/7 Support" },
          ].map(({ icon, text }, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 0.75 }}>
              {React.cloneElement(icon, { sx: { color: "#ff5722", fontSize: "2.5rem", mr: 0.75 } })}
              <Typography sx={{ color: "#333", fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}>{text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default TrackingSection;