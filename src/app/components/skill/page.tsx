"use client";
import { client } from "@/sanity/lib/client";
import {
  Avatar,
  Container,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { WebSite, WithContext } from "schema-dts";

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
interface ProjectDatafild {
  image: string,
  title: string,
  description: string,
}
export default function Skill() {
  const [skillname, setSkillname] = useState<ProjectDatafild | null>(null);
      // IMAGE AND TEXT SHOW FUNCTION
      useEffect(() => {
        const datafetch = async () => {
          const newdata = await client.fetch(
            `*[_type == "user"][0]{
          title,description,
          "image":image.asset->_id
          }`
          );
          console.log(skillname);
          setSkillname(newdata);
        }
        datafetch()
      }, []);
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e1e1e, #121212)",
        color: "white",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />

      <Container id="services" sx={{ py: 5 }}>
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff8c00, #f50057)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Skills & Technologies
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "React.js", icon: "https://img.icons8.com/color/96/000000/react-native.png" },
            { name: "Java", icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" },
            { name: "C", icon: "https://img.icons8.com/color/96/000000/c-programming.png" },
          ].map((skill) => (
            <Grid item xs={12} md={4} key={skill.name}>
              <Fade in={true} timeout={1000}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 30px rgba(255, 0, 87, 0.3)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 15px 40px rgba(255, 0, 87, 0.5)",
                      border: "2px solid #ff8c00",
                    },
                  }}
                >
                  <Avatar
                    src={skill.icon}
                    sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {skill.name}
                  </Typography>
                  <Typography sx={{ color: "#ccc" }}>
                    Expertise in {skill.name} development with modern technologies.
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
