import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

const ContactUsSection = () => (
  <Box sx={{ backgroundColor: "#f5f5f5", p: 4, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        mb: 4,
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        p: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center", mb: { xs: 3, md: 0 }, mr: { md: 2 } }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.838287678123!2d73.0478843152103!3d33.68442098071092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5e0f0f0f0f%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDInNTIuMyJF!5e0!3m2!1sen!2s!4v1611810193437!5m2!1sen!2s"
          width="100%"
          height="400px"
          style={{ border: 0, borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif", mb: 3 }}>
          Contact Us
        </Typography>
        <Typography sx={{ color: "#444", mb: 3, fontFamily: "Arial, sans-serif", textAlign: "center" }}>
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "500px", alignItems: "center" }}>
          <TextField label="Name" variant="outlined" sx={{ mb: 2, width: "100%" }} fullWidth />
          <TextField label="Email" variant="outlined" sx={{ mb: 2, width: "100%" }} fullWidth />
          <TextField label="Message" variant="outlined" sx={{ mb: 2, width: "100%" }} fullWidth multiline rows={4} />
          <Button variant="contained" endIcon={<Send />} sx={{ backgroundColor: "#ff5722", '&:hover': { backgroundColor: "#e64a19" } }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ContactUsSection;