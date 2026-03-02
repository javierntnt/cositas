import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Formulario enviado. Implementa tu lógica de envío aquí.');
  };

  return (
    <section id="contact" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Contáctanos</h2>
            <p className="text-center mb-5">
              Estamos aquí para ayudarte. Envíanos un mensaje
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <h5>📍 Dirección</h5>
                <p>Calle Principal #123, Ciudad, País</p>
              </div>
              <div className="contact-item">
                <h5>📞 Teléfono</h5>
                <p>+57 (123) 456-7890</p>
              </div>
              <div className="contact-item">
                <h5>✉️ Email</h5>
                <p>info@multiaxis.com</p>
              </div>
              <div className="contact-item">
                <h5>🕒 Horario</h5>
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="tu@email.com" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Tu teléfono" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Escribe tu mensaje aquí..." 
                  required 
                />
              </Form.Group>

              <Button type="submit" className="btn-primary-custom w-100">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
