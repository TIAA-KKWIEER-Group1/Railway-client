import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row className="py-3">
        <Col md={4} className="text-center text-md-left">
          <p className="copy-text">
            &copy; {new Date().getFullYear()} Railway Reservation. All rights
            reserved.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <p className="footer-text">Address: 123 Main Street, Anytown USA</p>
          <p className="footer-text">Phone: +1-555-123-4567</p>
        </Col>
        <Col md={4} className="text-center text-md-right">
          <p className="footer-text">Email: info@railwayreservation.com</p>
          <p className="footer-text">Follow us on social media:</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <FaFacebookSquare size={28} color="#4267B2" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <FaTwitterSquare size={28} color="#1DA1F2" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <FaInstagram size={28} color="#E1306C" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
