import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Simbologia.css';

const Simbologia = () => {
  const elementos = [
    {
      titulo: 'Forma Geométrica',
      descripcion: 'Las líneas y formas representan los múltiples ejes de desarrollo y crecimiento de la empresa, simbolizando versatilidad y expansión en todas direcciones.'
    },
    {
      titulo: 'Estructura',
      descripcion: 'La solidez de la estructura refleja estabilidad y confianza, elementos fundamentales en nuestra relación con los clientes y proyectos.'
    },
    {
      titulo: 'Dinamismo',
      descripcion: 'Los elementos en movimiento sugieren innovación constante y adaptabilidad a los cambios del mercado y las necesidades del cliente.'
    },
    {
      titulo: 'Integración',
      descripcion: 'La unión de todos los elementos representa la capacidad de integrar soluciones múltiples en una propuesta coherente y efectiva.'
    }
  ];

  return (
    <section id="simbologia" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Simbología</h2>
            <p className="text-center mb-5">
              Significado y elementos de nuestra identidad visual
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={6} className="mx-auto">
            <div className="simbologia-logo-container">
              <img 
                src="/src/components/img/Multisas3.png" 
                alt="Logo Multiaxis" 
                className="simbologia-logo"
              />
            </div>
          </Col>
        </Row>
        <Row>
          {elementos.map((elemento, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card className="simbologia-card h-100">
                <Card.Body>
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <Card.Title>{elemento.titulo}</Card.Title>
                  <Card.Text>{elemento.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Simbologia;
