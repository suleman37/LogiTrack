import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, TextField, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const LogisticsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px', width: '100%', margin: '0 auto' }}>
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px', width: '85%', margin: '0 auto' }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{ marginBottom: "3rem", width: "650px", boxShadow: 5, mt: "-150px", zIndex: 10, borderRadius: "12px", backgroundColor: "#ffffff" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
              Join Our Exclusive Newsletter
            </Typography>
            <Typography sx={{ color: "#555", marginTop: "0.5rem", fontFamily: "Arial, sans-serif" }}>
              Be the first to know about our latest updates and offers.
            </Typography>
            <Box sx={{ marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
              <TextField
                variant="outlined"
                placeholder="Your email address"
                sx={{
                  marginRight: "1rem",
                  width: "280px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#333",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5722",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e64a19",
                  },
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" sx={{ color: '#888', fontWeight: 'bold' }}>
            Constant Customer Support
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#0f172a',
              margin: '10px 0',
              lineHeight: 1.2,
            }}
          >
            Logistics And Supply Chain Operations
          </Typography>
          <Box
            sx={{
              width: '50px',
              height: '3px',
              backgroundColor: '#ff5722',
              margin: '20px 0',
            }}
          />
          <Typography variant="body1" sx={{ color: '#555', marginBottom: '20px' }}>
            Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim.
          </Typography>
          <Grid container spacing={2}>
            {/* Tracking */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <LocalShippingIcon sx={{ color: '#ff5722', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Tracking
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#555', marginBottom: '10px' }}>
                Habitasse integer dolor dis proin dolor. Aliquam hendrerit quisque.
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Non magnis massa mollis
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Diam auctor rhoncus habitasse
                </Typography>
              </Box>
            </Grid>
            {/* Returns */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <AssignmentReturnIcon sx={{ color: '#ff5722', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Returns
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#555', marginBottom: '10px' }}>
                Venenatis lacinia aliquet finibus porta ullamcorper curae ad a.
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Fermentum imperdiet fames
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Vehicula faucibus aliquet
                </Typography>
              </Box>
            </Grid>
            {/* Customer Support */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <SupportAgentIcon sx={{ color: '#ff5722', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Customer Support
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#555', marginBottom: '10px' }}>
                Always ready to assist you with any inquiries or issues.
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  24/7 availability
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Friendly and professional
                </Typography>
              </Box>
            </Grid>
            {/* Security */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <VerifiedUserIcon sx={{ color: '#ff5722', marginRight: '10px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Security
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#555', marginBottom: '10px' }}>
                Ensuring the safety and security of all operations.
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Advanced security protocols
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', color: '#555' }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#ff5722', marginRight: 1 }} />
                  Continuous monitoring
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: '100%',
              backgroundImage: 'url(../Assets/asphalt-landscape.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              minHeight: '400px',
            }}
          ></Paper>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default LogisticsSection;