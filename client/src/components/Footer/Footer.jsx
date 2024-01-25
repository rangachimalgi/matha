import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="medkit-outline"></ion-icon>{" "}
              <h1>SRS Matha</h1>
            </div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p> */}
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              {/* <li>Careers</li>
              <li>Our Centres</li>
              <li>Our Cares</li> */}
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              {/* <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li> */}
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Kachiguda, Hyderabad </li>
              <li>Email: Demo@gmail.com</li>
              <li>Phone: +91 999 888 8888</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            
            {/* Social Media Links */}
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
