import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resume from "../../Assets/Projects/projects-new/fastresume.png";
import aaxon from "../../Assets/Projects/projects-new/aaxon.png";
import luxage from "../../Assets/Projects/projects-new/luxage.png";
import luxride from "../../Assets/Projects/projects-new/luxride.png";
import mangaai from "../../Assets/Projects/projects-new/manga.png";
import saudi from "../../Assets/Projects/projects-new/saudi equipment.png";
import elit from "../../Assets/Projects/projects-new/elit square.png";
import bernie from "../../Assets/Projects/projects-new/berniyazi.png";
import jobfairx from "../../Assets/Projects/projects-new/jobs.png";
import jrnl from "../../Assets/Projects/projects-new/jrnl.png";
import animation from "../../Assets/Projects/projects-new/animation.png";
import tracy from "../../Assets/Projects/projects-new/htracy.png";
import corkcrm from "../../Assets/Projects/projects-new/cork.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              imgPath={luxage}
              isBlog={false}
              title="Luxage"
              description="Luxage curates luxury fashion, accessories, and watches, blending style and comfort. Shop high-quality pieces like the Day-Date President Watch (₨24,999) and Iced-Out Diamond Watches (from ₨4,399) with fast delivery, secure payments, and 24/7 support."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://luxage.shop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mangaai}
              isBlog={false}
              title="Manga AI"
              description="Manga AI is a web application that allows users to generate manga-style images using AI. It uses a pre-trained model to generate images based on the user's prompt. The user can then download the generated image or share it on social media."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://mangaai.org/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elit}
              isBlog={false}
              title="Elit Square"
              description="Elit Square delivers custom web and mobile app solutions, empowering businesses with scalable, secure digital tools. Our skilled developers use cutting-edge technologies, backed by 24/7 support and transparent pricing, to drive growth and innovation for startups and enterprises alike."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="http://elitsquare.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bernie}
              isBlog={false}
              title="Bernie Yazzie Consulting"
              description="Bernie Yazzie Consulting is a custom web platform built with Ruby on Rails and React.js for U.S. healthcare consultants. It provides a secure, HIPAA-compliant interface for analyzing patient data, claims, and billing via dynamic dashboards, enabling efficient, data-driven decisions."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://bernieyazzieconsulting.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobfairx}
              isBlog={false}
              title="Jobfairx"
              description="JobFairX is a virtual job fair platform connecting U.S. job seekers with employers through AI-driven matching. Users create profiles, upload résumés, and receive interview invitations for skill-aligned jobs via a device-agnostic interface. Features include video interviews, real-time scheduling, and reminders, supported by a secure, scalable backend and responsive frontend. JobFairX ensures an efficient, inclusive hiring experience with robust data management."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://jobfairx.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jrnl}
              isBlog={false}
              title="Jrnl"
              description="JRNL is a secure digital journaling platform for capturing personal stories through text, media, and social imports. Built with React.js and PHP, it offers shared journals, reminders, and privacy controls—enabling users to create and preserve meaningful life narratives with ease."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://jrnl.com/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Design Cave"
              description="Scale your business with our digital marketing subscriptions. Get unlimited design requests, fast delivery, and unlimited revisions—all for a fixed monthly rate. Our expert team uses a full media stack to cover every marketing need. Enjoy high-quality, fully custom designs with flexible, cancel-anytime plans."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://figma3animations.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracy}
              isBlog={false}
              title="H. Tracy Hall"
              description="The Tracy Hall site honors the inventor of synthetic diamonds, featuring a Virtual Museum, rare archives, and global impact highlights. Designed as an educational resource, it preserves his legacy through a clean, content-rich platform."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.htracyhall.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corkcrm}
              isBlog={false}
              title="Corkcrm.com"
              description="CorkCRM is a business management platform for painting contractors, streamlining tasks from lead tracking to invoicing. With features like e-signable proposals, Google Calendar sync, credit card payments, and detailed reporting, it boosts productivity and data-driven decisions. Built with a secure backend and mobile-friendly design, CorkCRM delivers a powerful, user-friendly solution tailored to the painting industry."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://corkcrm.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
