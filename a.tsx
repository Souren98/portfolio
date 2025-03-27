"use client";

import { client } from "@/sanity/lib/client";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    useTheme,
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
interface ContactDatafild {
    phone: string,
    address: string,
    email: string,
}
const Contact: React.FC = () => {
    const [contactname, setContactname] = useState<ContactDatafild | null>(null);
    // IMAGE AND TEXT SHOW FUNCTION
    useEffect(() => {
        const datafetch = async () => {
            const newdata = await client.fetch(
                `*[_type == "contact"][0]{
      phone,address,email,
      
      }`
            );
            console.log(newdata);
            setContactname(newdata);
        }
        datafetch()
    }, []);
    const theme = useTheme();

    return (
        <>
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
            />

            <Box
                id="contact"
                sx={{
                    py: 8,
                    background: "linear-gradient(135deg, #1e1e1e, #121212)",
                    minHeight: "100vh",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #ff8c00, #f50057)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            mb: 6,
                            fontSize: { xs: "2rem", md: "3rem" },
                        }}
                    >
                        Contact <span style={{ color: theme.palette.primary.main }}>Info</span>
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            {
                                icon: "https://img.icons8.com/bubbles/100/000000/phone.png",
                                title: "Phone",
                                details: ["7602884847", "8637811163"]
                            },
                            {
                                icon: "https://img.icons8.com/bubbles/100/000000/new-post.png",
                                title: "Email",
                                details: ["souren.lahiri9@gmail.com", "sourenlahiri@gmail.com"],
                            },
                            {
                                icon: "https://img.icons8.com/bubbles/100/000000/map-marker.png",
                                title: "Address",
                                details: ["Dum Dum, Kolkata"],
                            },
                        ].map((contact, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        backdropFilter: "blur(10px)",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "20px",
                                        boxShadow: "0 10px 30px rgba(255, 0, 87, 0.3)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                        "&:hover": {
                                            transform: "scale(1.07)",
                                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={contact.icon}
                                        alt={`${contact.title} Icon`}
                                        sx={{ width: 80, height: 80, mb: 2 }}
                                    />
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#fff",
                                        }}
                                    >
                                        {contact.title}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: "#ddd" }}>
                                        {contactname?.phone}
                                    </Typography>

                                </Paper>
                            </Grid>
                        ))}
                        <Typography variant="body1" sx={{ color: "#ddd" }}>
                            {contactname?.phone}
                        </Typography>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
export default Contact;
