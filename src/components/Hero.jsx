import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="brand-badge">Manual de Identidad Visual</div>
            <h1 className="hero-title">
              MULTIAXIS SAS
            </h1>
            <p className="hero-subtitle">
              Guía oficial de identidad corporativa que establece las directrices para 
              el uso correcto de los elementos visuales de nuestra marca.
            </p>
            <div className="hero-version">
              <span>Versión 1.0</span>
              <span className="separator">|</span>
              <span>Marzo 2026</span>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="hero-logo-container">
              <img 
                src="/src/components/img/Multisas3.png" 
                alt="Logo Multiaxis SAS" 
                className="hero-logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
