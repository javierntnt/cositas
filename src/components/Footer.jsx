import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <Container>
        <Row>
          <Col lg={5} md={6} className="mb-4">
            <h4>MULTIAXIS SAS</h4>
            <p className="footer-tagline">
              Manual de Identidad Corporativa
            </p>
            <p>
              Este documento establece las directrices oficiales para el uso 
              correcto de nuestra identidad visual en todas sus aplicaciones.
            </p>
            <div className="footer-version">
              <span className="version-badge">Versión 1.0</span>
              <span className="version-date">Marzo 2026</span>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5>Secciones</h5>
            <ul className="footer-links">
              <li><a href="#concepto">Concepto</a></li>
              <li><a href="#simbologia">Simbología</a></li>
              <li><a href="#planimetria">Planimetría</a></li>
              <li><a href="#gama-colores">Gama de Colores</a></li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h5>Recursos</h5>
            <ul className="footer-links">
              <li><a href="#tipografia">Tipografía</a></li>
              <li><a href="#aplicaciones">Aplicaciones</a></li>
              <li><a href="#versiones">Versiones del Logo</a></li>
            </ul>
            <div className="footer-contact mt-4">
              <p className="contact-label">Consultas sobre identidad:</p>
              <a href="mailto:identidad@multiaxis.com" className="contact-email">
                identidad@multiaxis.com
              </a>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col lg={12} className="text-center">
            <p className="mb-2 copyright-text">
              &copy; {new Date().getFullYear()} Multiaxis SAS. Todos los derechos reservados.
            </p>
            <p className="mb-0 confidencial-text">
              Material de uso interno y confidencial. El uso de esta identidad está sujeto a las directrices aquí establecidas.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
