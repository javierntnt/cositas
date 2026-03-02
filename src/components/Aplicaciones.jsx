import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Aplicaciones.css';

const Aplicaciones = () => {
  const aplicaciones = [
    {
      categoria: 'Material Corporativo',
      items: ['Papelería', 'Tarjetas de presentación', 'Sobres', 'Carpetas']
    },
    {
      categoria: 'Digital',
      items: ['Sitio web', 'Redes sociales', 'Email marketing', 'Aplicaciones']
    },
    {
      categoria: 'Señalética',
      items: ['Rótulos', 'Señalizaciones', 'Vehículos', 'Uniformes']
    },
    {
      categoria: 'Publicidad',
      items: ['Vallas publicitarias', 'Folletos', 'Banners', 'Material POP']
    }
  ];

  return (
    <section id="aplicaciones" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Aplicaciones de Marca</h2>
            <p className="text-center mb-5">
              Ejemplos de uso correcto de la identidad visual
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {aplicaciones.map((app, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="aplicacion-card h-100">
                <Card.Body>
                  <div className="aplicacion-icon">{String(index + 1).padStart(2, '0')}</div>
                  <Card.Title>{app.categoria}</Card.Title>
                  <ul className="aplicacion-list">
                    {app.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <div className="ejemplos-visuales">
              <h3 className="subsection-title">Ejemplos Visuales</h3>
              <Row>
                <Col md={6} className="mb-4">
                  <div className="ejemplo-box">
                    <div className="ejemplo-mockup">
                      <img 
                        src="/src/components/img/Multisas3.png" 
                        alt="Aplicación 1" 
                        className="mockup-img"
                      />
                    </div>
                    <p className="ejemplo-caption">Aplicación en material corporativo</p>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="ejemplo-box">
                    <div className="ejemplo-mockup digital-mockup">
                      <img 
                        src="/src/components/img/Multisas3.png" 
                        alt="Aplicación 2" 
                        className="mockup-img"
                      />
                    </div>
                    <p className="ejemplo-caption">Aplicación digital</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={10} className="mx-auto">
            <div className="aplicaciones-guidelines">
              <h4>Consideraciones Importantes</h4>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="consideracion-item">
                    <span className="consideracion-number">1</span>
                    <div>
                      <strong>Contraste adecuado:</strong>
                      <p>Asegurar buena visibilidad en todos los fondos</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="consideracion-item">
                    <span className="consideracion-number">2</span>
                    <div>
                      <strong>Tamaño legible:</strong>
                      <p>Respetar tamaños mínimos establecidos</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="consideracion-item">
                    <span className="consideracion-number">3</span>
                    <div>
                      <strong>Uso de colores:</strong>
                      <p>Mantener paleta cromática oficial</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="consideracion-item">
                    <span className="consideracion-number">4</span>
                    <div>
                      <strong>Área de protección:</strong>
                      <p>Respetar espacios libres alrededor</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Aplicaciones;
