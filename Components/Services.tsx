import {
  Avatar,
  Container,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function Services() {
  return (
    <div>
      <Container id="services" sx={{ py: 5 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Services
        </Typography>
        <Grid container spacing={4}>
          {["React.js", "Java", "C"].map((service) => (
            <Grid item xs={12} md={4} key={service}>
              <Fade in={true} timeout={1000}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Avatar
                    src="https://img.icons8.com/bubbles/100/000000/services.png"
                    sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h5">{service}</Typography>
                  <Typography>
                    Expertise in {service} development with modern technologies.
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
