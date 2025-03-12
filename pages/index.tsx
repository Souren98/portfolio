import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Paper,
  Avatar,
  TextField,
  Card,
  CardContent,
  CardMedia,
  useScrollTrigger,
  Slide,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";
import styles from "./Home.module.css";
import Hero from "@/Components/Hero";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 1s ease-in-out`,
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  animation: `${slideUp} 1s ease-in-out`,
}));

export default function Home() {
  return (
    <Box>


      <Hero />


      <Services />


      <Projects />


      <Contact />
    </Box>
  );
}
