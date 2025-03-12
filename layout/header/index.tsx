import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("transparent");

  
  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 250 ? "#29323c" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: headerBg,
          transition: "0.3s",
          boxShadow: "none",
        }}
      >
        <Toolbar>
        
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            <span style={{ color: "#f50057" }}>S</span>ouren{" "}
            <span style={{ color: "#f50057" }}>L</span>ahiri
          </Typography>

        
          <IconButton
            color="inherit"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

         
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {["Home", "services", "projects", "contact"].map((section) => (
              <Button
                key={section}
                href={`#${section}`}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "1rem",
                  mx: 1,
                  "&:hover": {
                    color: "#f50057",
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

    
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#29323c",
            color: "white",
          },
        }}
      >
        <List>
          {["Home", "services", "projects", "contact"].map((section) => (
            <ListItem
             
              key={section}
              onClick={toggleMobileMenu}
              component="a"
              href={`#${section}`}
              sx={{
                "&:hover": {
                  backgroundColor: "#f50057",
                },
              }}
            >
              <ListItemText
                primary={section.charAt(0).toUpperCase() + section.slice(1)}
                sx={{ textAlign: "center" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}