import { Box, Typography } from "@mui/material";



import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          backgroundColor: "#29323c",
          color: "white",
        }}
      >
        <Typography variant="h6">
          &copy; 2024 Souren Lahiri | Your Complete Web Solution
        </Typography>
      </Box>
    </>
  );
}
