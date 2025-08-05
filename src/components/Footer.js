import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const handleContactClick = () => {
    window.open("tel:+923065647969", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923065647969", "_blank");
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ghulam Mustafa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} GM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ghulam-mustafa45"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ghulam-mustafa-9a895921b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+923065647969"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleContactClick}
              >
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/923065647969"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
