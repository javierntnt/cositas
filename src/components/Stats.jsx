import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Clientes Satisfechos' },
    { number: '1000+', label: 'Proyectos Completados' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '50+', label: 'Profesionales' }
  ];

  return (
    <section id="stats" className="section section-dark">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-white">Nuestros Logros</h2>
            <p className="text-center mb-5 text-white">
              Números que reflejan nuestro compromiso y excelencia
            </p>
          </Col>
        </Row>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="stat-item text-center">
                <h2 className="stat-number">{stat.number}</h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
