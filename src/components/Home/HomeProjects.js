import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import resume from "../../Assets/Projects/projects-new/fastresume.png";
import aaxon from "../../Assets/Projects/projects-new/aaxon.png";
import luxage from "../../Assets/Projects/projects-new/luxage.png";

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
              imgPath={aaxon}
              isBlog={false}
              title="Aaxon Solutions"
              description="Aaxon Solutions provides innovative tech solutions, including SAP, custom software, AI analytics, and secure cloud infrastructure. With 50+ global partnerships, we drive efficiency in health, education, and travel using full-stack development, PWAs, IoT, and AI/ML."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="http://91.107.193.126/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxage}
              isBlog={false}
              title="Luxage"
              description="Luxage curates luxury fashion, accessories, and watches, blending style and comfort. Shop high-quality pieces like the Day-Date President Watch (₨24,999) and Iced-Out Diamond Watches (from ₨4,399) with fast delivery, secure payments, and 24/7 support."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://luxage.shop/"
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