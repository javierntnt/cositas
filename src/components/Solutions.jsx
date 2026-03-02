import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'Solución Empresarial',
      description: 'Soluciones integrales para empresas de todos los tamaños.',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      title: 'Solución Tecnológica',
      description: 'Tecnología de punta para impulsar tu negocio.',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      title: 'Solución Personalizada',
      description: 'Adaptamos nuestras soluciones a tus necesidades específicas.',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ];

  return (
    <section id="solutions" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Nuestras Soluciones</h2>
            <p className="text-center mb-5">
              Desarrollamos soluciones innovadoras adaptadas a tu negocio
            </p>
          </Col>
        </Row>
        <Row>
          {solutions.map((solution, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="solution-card h-100">
                <Card.Body>
                  <Card.Title>{solution.title}</Card.Title>
                  <Card.Text>{solution.description}</Card.Text>
                  <ul className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary-custom w-100 mt-3">
                    Más Información
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;
