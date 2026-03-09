import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import resume from "../../Assets/Projects/projects-new/fastresume.png";
import luxride from "../../Assets/Projects/projects-new/luxride.png";
import saudi from "../../Assets/Projects/projects-new/saudi equipment.png";


function HomeProjects() {
  return (
    <Container fluid className="home-projects-section">
      <Container>
        <Row>
          <Col md={12} className="home-projects-header">
            <h1 className="home-about-heading" style={{ fontSize: "2.6em" }}>
              FEATURED <span className="purple">PROJECTS</span>
            </h1>
            <p style={{ color: "white", fontSize: "1.1em" }}>
              Here are some of my recent works. Check out more projects in the Projects section.
            </p>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Ai Resume Builder"
              description="FastResume.ai is an AI-powered platform for creating professional resumes quickly. Built with React and PHP CodeIgniter, it offers a user-friendly, secure experience. Users input job details, and the AI generates ATS-optimized content. With real-time editing, multiple templates, and smart formatting, it delivers polished resumes in minutes."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://fastresume.ai/"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxride}
              isBlog={false}
              title="Luxride"
              description="Cleveland Lux Ride offers luxury chauffeur services in Cleveland through an intuitive app and website. Book airport transfers, events, or daily rides with flexible options. Our secure platform handles registration, tracking, assignments, and payments, ensuring a premium, seamless travel experience."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://clevelandluxride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saudi}
              isBlog={false}
              title="Saudi Equipments"
              description="Saudi Equipment is Saudi Arabia’s top platform for buying, selling, and renting heavy equipment in 2025, offering a commission-free marketplace. It covers excavators, trucks, cranes, loaders, and generators, connecting users in Riyadh, Jeddah, and more. Download the app on App Store or Google Play."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://saudi-equipments.vercel.app/?lang=en"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="text-center">
            <Button
              as={Link}
              to="/project"
              variant="outline-light"
              size="lg"
              style={{
                borderColor: "rgba(199, 112, 240, 0.5)",
                color: "white",
                padding: "12px 30px",
                fontSize: "1.1em",
                transition: "all 0.3s ease"
              }}
            >
              View All Projects
              <AiOutlineArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeProjects; 