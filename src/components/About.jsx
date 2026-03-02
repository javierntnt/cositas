import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Sobre Nosotros</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image">
              <div className="placeholder-box">Imagen de la Empresa</div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h3>¿Quiénes Somos?</h3>
              <p>
                Multiaxis SAS es una empresa comprometida con la excelencia y la innovación. 
                Nos especializamos en proporcionar soluciones integrales que impulsan el 
                crecimiento de nuestros clientes.
              </p>
              <h4>Nuestra Misión</h4>
              <p>
                Transformar desafíos en oportunidades mediante soluciones innovadoras y 
                un servicio excepcional.
              </p>
              <h4>Nuestra Visión</h4>
              <p>
                Ser líderes en el mercado, reconocidos por nuestra calidad, innovación 
                y compromiso con nuestros clientes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
