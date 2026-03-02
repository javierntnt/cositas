import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Concepto.css';

const Concepto = () => {
  return (
    <section id="concepto" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Concepto de Marca</h2>
            <p className="text-center mb-5">
              La filosofía detrás de nuestra identidad visual
            </p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="concepto-content">
              <h3>Nuestra Identidad</h3>
              <p>
                MULTIAXIS SAS representa la innovación y la versatilidad en múltiples dimensiones. 
                Nuestra marca refleja la capacidad de adaptarnos y crecer en diferentes ejes empresariales, 
                manteniendo siempre un equilibrio perfecto entre tecnología, eficiencia y calidad.
              </p>
              <h4>Valores de Marca</h4>
              <ul className="valores-list">
                <li><strong>Innovación:</strong> Pensamiento creativo y soluciones de vanguardia</li>
                <li><strong>Versatilidad:</strong> Adaptación a múltiples sectores y necesidades</li>
                <li><strong>Precisión:</strong> Exactitud en cada proyecto que desarrollamos</li>
                <li><strong>Confianza:</strong> Compromiso sólido con nuestros clientes</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="concepto-visual">
              <div className="concepto-image-wrapper">
                <img 
                  src="/src/components/img/Multisas3.png" 
                  alt="Logo Multiaxis SAS" 
                  className="concepto-logo"
                />
              </div>
              <p className="concepto-tagline">
                "Múltiples ejes, una sola dirección: el éxito"
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Concepto;
