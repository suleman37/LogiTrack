import React from "react";
import { Box, Typography } from "@mui/material";
import TeamMember1 from "../Assets/CEO.jpeg";
import TeamMember2 from "../Assets/CTO.jpeg";
import TeamMember3 from "../Assets/coo.jpeg";

const TeamSection = () => (
  <Box sx={{ backgroundColor: "#f5f5f5", p: 3, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", mb: 3 }}>
      Meet Our Team
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", flexWrap: "wrap" }}>
      {[
        { img: TeamMember1, name: "John Doe", role: "CEO" },
        { img: TeamMember2, name: "Jane Smith", role: "CTO" },
        { img: TeamMember3, name: "Emily Johnson", role: "COO" },
      ].map(({ img, name, role }, index) => (
        <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3, width: "250px" }}>
          <img src={img} alt={name} style={{ width: "300px", height: "300px", mb: 1, boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", borderRadius: "25px", objectFit: "cover" }} />
          <Typography sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>{name}</Typography>
          <Typography sx={{ color: "#777", fontFamily: "Arial, sans-serif" }}>{role}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default TeamSection;