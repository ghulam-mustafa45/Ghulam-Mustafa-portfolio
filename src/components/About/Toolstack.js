
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { FaCode } from "react-icons/fa"; // Placeholder for Cursor AI

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
        <SiVisualstudiocode />
        <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
        <SiPostman />
        <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
        <SiVercel />
        <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
        <SiGithub />
        <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
        <FaCode />
        <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>Cursor AI</p>
      </Col>
    </Row>
  );
}

export default Toolstack;