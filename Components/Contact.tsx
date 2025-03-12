import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    useTheme,
  } from "@mui/material";
  import React from "react";
  
  export default function Contact() {
    const theme = useTheme();
  
    return (
      <Box
        id="contact"
        sx={{
          py: 8,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container>
         
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 6,
            }}
          >
            Contact <span style={{ color: theme.palette.primary.main }}>Info</span>
          </Typography>
  
      
          <Grid container spacing={4} justifyContent="center">
           
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://img.icons8.com/bubbles/100/000000/phone.png"
                  alt="Phone Icon"
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography variant="h5" gutterBottom>
                  Phone
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  7602884847
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  8537921851
                </Typography>
              </Paper>
            </Grid>
  
           
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                  alt="Email Icon"
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography variant="h5" gutterBottom>
                  Email
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  souren.lahiri9@gmail.com
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  sourenlahiri@gmail.com
                </Typography>
              </Paper>
            </Grid>
  
         
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
                  alt="Address Icon"
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography variant="h5" gutterBottom>
                  Address
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Dum Dum, Kolkata
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }