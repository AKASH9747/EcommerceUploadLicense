import React from "react";
import footerImg from "./images/Group2358.png";
import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      style={{ background: "#F5F5F5 0% 0% no-repeat padding-box" }}
      className="mt-4 pt-4"
    >
      <Container className="footer-body">
        <Row>
          <Col md={6} lg={3}>
            <img src={footerImg} alt="Cigars City" />
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Got Questions ? Call us
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                1-800-532-4427
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Contact info
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                5449 Endeavour Ct.
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Moorpark, CA 93021
              </a>
            </p>
          </Col>
          <Col md={6} lg={3}>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                COMPANY
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                About us
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Buyer
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Seller
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Contact us
              </a>
            </p>
          </Col>
          <Col md={6} lg={3}>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                INFORMATION
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Exchanged and Return Policy
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Terms and Condition
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                FAQ
              </a>
            </p>
          </Col>
          <Col md={12} lg={3}>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                PAYMENT METHODS
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                About us
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Buyer
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Seller
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Contact us
              </a>
            </p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2021 Company Ltd. All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
