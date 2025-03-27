"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import Script from "next/script";
import Image from "next/image";
import { WebSite, WithContext } from "schema-dts";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// SCHEMA - Website
const jsonLdWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Souren Laheri Portfolio",
  url: "https://sdportfolio.com",
  description:
    "Explore the portfolio of Souren Laheri, a Front-end Developer skilled in React.js, Next.js, and Material UI.",
  publisher: {
    "@type": "Person",
    name: "Souren Laheri",
  },
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce platform built with React.js and Node.js, featuring user authentication, product management, and payment integration.",
    image: "/images/ecommerce.jpeg",
    color: "#f50057",
    varcellink: "https://noodles-pmnv.vercel.app",
  },
  {
    id: 2,
    title: "Google Calendar",
    description:
      "A modern and responsive calendar application built with Next.js and Material-UI for seamless scheduling and reminders.",
    image: "/images/calender.jpeg",
    color: "#00bcd4",
    varcellink: "https://calendar-cyan-six.vercel.app",
  },
  {
    id: 3,
    title: "Quiz Website",
    description:
      "An interactive quiz application featuring real-time score tracking, built with React.js and Firebase.",
    image: "/images/Quiz.png",
    color: "#4caf50",
    varcellink: "https://quizz-taupe-phi.vercel.app/",
  },
];
interface ProjectDatafild {
  image: string,
  title: string,
  description: string,
}

const Projects: React.FC = () => {
   const [projectname, setProjectname] = useState<ProjectDatafild | null>(null);
    // IMAGE AND TEXT SHOW FUNCTION
    useEffect(() => {
      const datafetch = async () => {
        const newdata = await client.fetch(
          `*[_type == "user"][0]{
        title,description,
        "image":image.asset->_id
        }`
        );
        console.log(projectname);
        setProjectname(newdata);
      }
      datafetch()
    }, []);
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />

      <Box
        id="projects"
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4, md: 6 },
          background: "linear-gradient(135deg, #1e1e1e, #121212)",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff8c00, #f50057)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            }}
          >
            Recent <span style={{ color: "#f50057" }}>Projects</span>
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Fade in={true} timeout={1000}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 10px 30px rgba(255, 0, 87, 0.3)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: `0 0 30px ${project.color}`,
                      },
                    }}
                  >
                    {/* Image Section */}
                    <div style={{ position: "relative", width: "100%", height: 200 }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                      />
                    </div>

                    {/* Card Content */}
                    <CardContent
                      sx={{
                        flexGrow: 1, // Allows content to take up available space
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: `linear-gradient(90deg, ${project.color}, ${project.color}90)`,
                        color: "#fff",
                        textAlign: "center",
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          mb: { xs: 1.5, md: 2 },
                          fontSize: { xs: "1.2rem", md: "1.5rem" },
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: { xs: 2, md: 3 },
                          color: "#ddd",
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Button Section */}
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#fff",
                          borderColor: "#fff",
                          transition: "0.3s",
                          fontWeight: "bold",
                          letterSpacing: "1px",
                          fontSize: { xs: "0.8rem", md: "1rem" },
                          "&:hover": {
                            background: "#fff",
                            color: project.color,
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <a
                          href={project.varcellink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          View
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
