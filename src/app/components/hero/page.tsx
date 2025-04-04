"use client";
import { client } from "@/sanity/lib/client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { WebSite, WithContext } from "schema-dts";
import { urlFor } from "@/sanity/lib/image";
import Projects from "../project/page";
import Skill from "../skill/page";
import Contact from "../contact/page";

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
interface AboutDatafild {
  title: string,
  description: string,
  name: string,
  image: string,
}

const Home: React.FC = () => {
  const [username, setUsername] = useState<AboutDatafild | null>(null);
  const [loding, setLoding] = useState<boolean>(true)
  // IMAGE AND TEXT SHOW FUNCTION
  useEffect(() => {
    const datafetch = async () => {
      const newdata = await client.fetch(
        `*[_type == "user"][0]{
      title,description,name,
      "image":image.asset->_id
      }`
      );
      setUsername(newdata);
      setLoding(false)
    }
    datafetch()
  }, []);
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />

      <Box
        id="hero"
        sx={{
          height: { xs: "auto", md: "100vh" },
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#121212",
          color: "white",
          padding: { xs: "20% 5%", md: "0 5%" },
          position: "relative",
          overflow: "hidden",
          gap: { xs: "2rem", md: 0 },
        }}
      >
        <Box sx={{ 
          maxWidth: { xs: "100%", md: "600px" }, 
          zIndex: 1,
          textAlign: { xs: "center", md: "left" },
          mt: { xs: 4, md: 0 }
        }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              lineHeight: "1.2",
              mb: 2,
              background: "linear-gradient(90deg, #f50057, #ff8c00)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "fadeIn 1s ease-in-out",
            }}
          >
            Hello, I&apos;m
          </Typography>
          <Typography variant="h2"
            sx={{
              color: "#f50057",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            }}>
            {username?.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#bbb",
              mb: 3,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              animation: "fadeIn 1.2s ease-in-out",
            }}
          >
            A passionate developer specializing in React.js, Java, and C. Let&apos;s
            build something amazing together!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                padding: { xs: "10px 25px", md: "12px 35px" },
                borderRadius: "30px",
                textTransform: "none",
                background: "linear-gradient(90deg, #f50057, #ff8c00)",
                transition: "0.4s",
                boxShadow: "0 4px 15px rgba(245, 0, 87, 0.3)",
                "&:hover": {
                  color: "#fff",
                  background: "black",
                  transform: "scale(1.07)",
                  border: "2px solid #f50057",
                  boxShadow: "0 0 25px rgba(245, 0, 87, 0.5)",
                },
              }}
            >
              View My Work
            </Button>
          </Box>
        </Box>

        <Box sx={{ 
          display: "flex", 
          justifyContent: "center",
          width: "100%",
          mt: { xs: 4, md: 0 },
          zIndex: 1 
        }}>
          {!loding && (
            <Image
              src={username?.image ? urlFor(username.image).url() : ''}
              alt="Souren Lahiri"
              width={300}
              height={300}
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                borderRadius: "50%",
                border: "5px solid #f50057",
                boxShadow: "0 0 30px rgba(245, 0, 87, 0.6)",
                animation: "fadeIn 1.5s ease-in-out",
              }}
              priority
            />
          )}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, rgba(245,0,87,0.2) 10%, transparent 10.01%)",
            backgroundSize: "20px 20px",
            zIndex: 0,
          }}
        />
      </Box>
      <Box>
        <Projects />
        <Skill />
        <Contact />
      </Box>
    </>
  );
};
export default Home;