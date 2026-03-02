import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Cliente 1',
      company: 'Empresa ABC',
      text: 'Excelente servicio, superaron todas nuestras expectativas. Altamente recomendados.',
      rating: 5
    },
    {
      name: 'Cliente 2',
      company: 'Empresa XYZ',
      text: 'Profesionales comprometidos y soluciones efectivas. Muy satisfechos con los resultados.',
      rating: 5
    },
    {
      name: 'Cliente 3',
      company: 'Empresa 123',
      text: 'Una experiencia increíble trabajar con este equipo. Definitivamente volveremos a trabajar juntos.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Testimonios</h2>
            <p className="text-center mb-5">
              Lo que dicen nuestros clientes sobre nosotros
            </p>
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="rating mb-3">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <Card.Text className="testimonial-text">
                    "{testimonial.text}"
                  </Card.Text>
                  <div className="testimonial-author">
                    <h5>{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.company}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
