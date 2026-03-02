import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Servicio 1',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '🚀'
    },
    {
      title: 'Servicio 2',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '💡'
    },
    {
      title: 'Servicio 3',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '⚙️'
    },
    {
      title: 'Servicio 4',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '📊'
    },
    {
      title: 'Servicio 5',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '🔧'
    },
    {
      title: 'Servicio 6',
      description: 'Descripción detallada del servicio que ofreces.',
      icon: '🎯'
    }
  ];

  return (
    <section id="services" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="text-center mb-5">
              Ofrecemos una amplia gama de servicios diseñados para satisfacer tus necesidades
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
