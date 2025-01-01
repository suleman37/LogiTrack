import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import client1 from "../Assets/1519904578831.jpeg";
import client2 from "../Assets/karachi.png";
import client3 from "../Assets/Screenshot-2023-08-21-133145.png";
import client4 from "../Assets/Screenshot-2023-08-21-133315.png";
import client5 from "../Assets/Screenshot-2023-08-21-133513.png";
import client6 from "../Assets/westren-service.png";

const ClientsSection = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % clients.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 3, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", mb: 3 }}>
        Our Clients
      </Typography>
      <Typography sx={{ color: "#444", mb: 3, fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        We are proud to have worked with some of the most renowned companies in the industry.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 10 }}>
          {clients.slice(currentIndex, currentIndex + 5).map((client, index) => (
            <Box key={index} sx={{ width: "200px", textAlign: "center" }}>
              <img
                src={client}
                alt={`Client ${currentIndex + index + 1}`}
                style={{ width: "200px", height: "100px", boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", borderRadius: "12px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientsSection;