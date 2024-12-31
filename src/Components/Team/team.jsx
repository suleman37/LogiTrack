import React from "react";
import demoImage1 from "../Assets/1.png";
import demoImage2 from "../Assets/2.png";
import demoImage3 from "../Assets/3a.png";
import LazyLoad from "react-lazyload";
import "animate.css";
import { Container, Grid, Typography, Box, Card, CardContent, CardHeader, Avatar } from "@mui/material";
import { AccountCircle, BusinessCenter, Campaign } from "@mui/icons-material";

const TeamIntroduction = () => {
  return (
    <>
      <LazyLoad offset={20} once>
        <Container className="team-container mt-5" id="Our Team">
          <Grid container spacing={4} justifyContent="center">
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h5" className="team-heading" sx={{ textAlign: "center", marginBottom: "10px", fontSize: '26px', fontWeight: 'bold', color: '#d32f2f' }}>
                  MEET OUR TEAM
                </Typography>
                <Typography variant="h6" className="team-subheading" sx={{ textAlign: "center", marginBottom: "10px", fontSize: '20px', color: '#424242' }}>
                  DEDICATED PROFESSIONALS
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  className="divider"
                  sx={{ height: "4px", width: '60px', backgroundColor: '#d32f2f', marginTop: "8px", borderRadius: '2px' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  className="team-description"
                  sx={{ textAlign: "center", color: '#616161', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7', fontSize: '15px' }}
                >
                  Our team at The Pak Enterprises is composed of experienced professionals committed to delivering excellence and innovation in logistics solutions. Meet the people who make it all happen.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className="team-members">
              <Grid container spacing={4} justifyContent="center">
                {[
                  { icon: <AccountCircle />, image: demoImage1, name: "John Doe", role: "CEO", description: "John leads our company with a visionary approach, ensuring strategic growth and innovation." },
                  { icon: <BusinessCenter />, image: demoImage2, name: "Jane Smith", role: "Director Manager", description: "Jane oversees our operations, ensuring efficiency and excellence in all our services." },
                  { icon: <Campaign />, image: demoImage3, name: "Mike Johnson", role: "Marketing Manager", description: "Mike drives our marketing strategies, enhancing our brand presence and customer engagement." }
                ].map((member, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' } }}>
                      <CardHeader
                        avatar={<Avatar sx={{ bgcolor: '#d32f2f' }}>{member.icon}</Avatar>}
                        title={member.name}
                        subheader={member.role}
                        titleTypographyProps={{ align: "center", fontWeight: 'bold', color: '#424242' }}
                        subheaderTypographyProps={{ align: "center", color: '#757575' }}
                      />
                      <Box
                        component="img"
                        sx={{
                          height: 140,
                          width: 140,
                          borderRadius: '50%',
                          margin: '0 auto',
                          border: '3px solid #d32f2f',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                        src={member.image}
                        alt={member.name}
                      />
                      <CardContent>
                        <Typography variant="body2" align="center" sx={{ color: '#616161', padding: '10px', fontSize: '14px' }}>
                          {member.description}
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

export default TeamIntroduction;