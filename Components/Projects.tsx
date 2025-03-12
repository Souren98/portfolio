import {
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import img1 from "../images/calender.jpeg";
import img2 from "../images/ecommerce.jpeg";
import Quiz from "../images/Quiz.png"
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce platform built with React.js and Node.js, featuring user authentication, product management, and payment integration.",
      image: img2,
      color: "#f50057",
      varcellink:"https://noodles-pmnv.vercel.app"
    },
    {
      id: 2,
      title: "Google Calender",
      description:
        "A modern and responsive portfolio website showcasing my skills, projects, and contact information, built with Next.js and Material-UI.",
      image: img1,
      color: "#00bcd4",
      varcellink:"https://calendar-cyan-six.vercel.app"
    },
    {
      id: 3,
      title: "Quiz website",
      description:
        "A task management application designed to help users organize their daily tasks, built with React Native and Firebase for real-time updates.",
      image: Quiz, 
      color: "#4caf50",
        varcellink:"https://quizz-taupe-phi.vercel.app/"
    },
  ];

  return (
    <Container id="projects" sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#29323c",
          mb: 6,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Recent <span style={{ color: "#f50057" }}>Projects</span>
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Fade in={true} timeout={1000}>
              <Card
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{ position: "relative", width: "100%", height: 200 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    priority={true} 
                  />
                </div>
                <CardContent
                  sx={{
                    backgroundColor: project.color,
                    color: "#fff",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: project.color,
                      },
                    }}
                  >
                    <a
                      href={project.varcellink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
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
  );
}
