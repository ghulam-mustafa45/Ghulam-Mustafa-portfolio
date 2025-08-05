import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiStrapi,
  SiBootstrap,
  SiWordpress,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaCode } from "react-icons/fa"; // Placeholder for CodeIgniter

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <DiJavascript1 />
      <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>JavaScript</p>
    </Col>
    {/* <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <TbBrandGolang />
      <p className="tech-label" style={{ fontSize: "0.7rem", marginTop: "8px" }}>Go</p>
    </Col> */}
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <DiNodejs />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Node.js</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <DiReact />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>React</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <DiMongodb />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>MongoDB</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiNextdotjs />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Next.js</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <DiGit />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Git</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiPostgresql />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>PostgreSQL</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiTailwindcss />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Tailwind CSS</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiStrapi />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Strapi</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiBootstrap />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>Bootstrap</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <SiWordpress />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>WordPress</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "2rem", padding: "10px" }}>
      <FaCode />
      <p className="tech-label" style={{ fontSize: "0.9rem", marginTop: "8px" }}>CodeIgniter</p>
    </Col>
  </Row>
  );
}

export default Techstack;
