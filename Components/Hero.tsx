import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../images/profile_pic.jpg";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1c1c1c",
        color: "white",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
     
      <Box sx={{ maxWidth: "600px", zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: "1.2",
            mb: 2,
          }}
        >
          Hello, I'm <span style={{ color: "#f50057" }}>Souren Lahiri</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#aaa",
            mb: 3,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          A passionate developer specializing in React.js, Java, and C. Let's
          build something amazing together!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontSize: "1.1rem",
            padding: "10px 30px",
            borderRadius: "25px",
            textTransform: "none",
            backgroundColor: "#f50057",
            transition: "0.3s",
            "&:hover": {
              color: "#fff",
              backgroundColor:"black",
              transform: "scale(1.05)",
              border:"2px solid #f50057"
            },
          }}
        >
          View My Work
        </Button>
      </Box>

     
      <Box sx={{ display: { xs: "none", md: "block" }, zIndex: 1 }}>
        <Image
          src={profilePic}
          alt="Souren Lahiri"
          width={450}
          height={410}
          style={{
            borderRadius: "50%",
            border: "5px solid #f50057",
            boxShadow: "0 0 20px rgba(245, 0, 87, 0.5)",
          }}
        />
      </Box>

      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(245,0,87,0.1) 10%, transparent 10.01%)",
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      />
    </Box>
  );
}
