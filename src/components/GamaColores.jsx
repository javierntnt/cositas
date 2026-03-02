import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './GamaColores.css';

const GamaColores = () => {
  const coloresPrimarios = [
    {
      nombre: 'Azul Corporativo',
      hex: '#2C5F8D',
      rgb: 'RGB(44, 95, 141)',
      cmyk: 'C:69 M:33 Y:0 K:45',
      uso: 'Color principal de marca'
    },
    {
      nombre: 'Azul Claro',
      hex: '#4A90C7',
      rgb: 'RGB(74, 144, 199)',
      cmyk: 'C:63 M:28 Y:0 K:22',
      uso: 'Color secundario'
    },
    {
      nombre: 'Naranja Acento',
      hex: '#F39C12',
      rgb: 'RGB(243, 156, 18)',
      cmyk: 'C:0 M:36 Y:93 K:5',
      uso: 'Color de acento y llamados a la acción'
    }
  ];

  const coloresComplementarios = [
    { nombre: 'Oscuro', hex: '#1A1A2E', rgb: 'RGB(26, 26, 46)' },
    { nombre: 'Gris Medio', hex: '#6C757D', rgb: 'RGB(108, 117, 125)' },
    { nombre: 'Gris Claro', hex: '#E9ECEF', rgb: 'RGB(233, 236, 239)' },
    { nombre: 'Blanco', hex: '#FFFFFF', rgb: 'RGB(255, 255, 255)' }
  ];

  return (
    <section id="gama-colores" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Gama de Colores</h2>
            <p className="text-center mb-5">
              Paleta cromática corporativa de Multiaxis SAS
            </p>
          </Col>
        </Row>

        {/* Imagen de paleta de colores si existe */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <div className="paleta-image-container">
              <img 
                src="/src/components/img/color empresa 1.png" 
                alt="Paleta de colores corporativa" 
                className="paleta-image"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="subsection-title">Colores Primarios</h3>
          </Col>
          {coloresPrimarios.map((color, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="color-card">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <Card.Body>
                  <Card.Title>{color.nombre}</Card.Title>
                  <div className="color-specs">
                    <div className="spec-item">
                      <span className="spec-label">HEX</span>
                      <span className="spec-value">{color.hex}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">RGB</span>
                      <span className="spec-value">{color.rgb}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">CMYK</span>
                      <span className="spec-value">{color.cmyk}</span>
                    </div>
                  </div>
                  <p className="color-uso">{color.uso}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="subsection-title">Colores Complementarios</h3>
          </Col>
          {coloresComplementarios.map((color, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="color-complementario">
                <div 
                  className="color-swatch-small" 
                  style={{ 
                    backgroundColor: color.hex,
                    border: color.hex === '#FFFFFF' ? '1px solid #dee2e6' : 'none'
                  }}
                ></div>
                <h5>{color.nombre}</h5>
                <p className="spec-value">{color.hex}</p>
                <p className="spec-value small">{color.rgb}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="color-guidelines">
              <h4>Directrices de Uso</h4>
              <Row>
                <Col md={6}>
                  <div className="guideline-item">
                    <div className="guideline-icon correct">✓</div>
                    <div className="guideline-text">
                      <strong>Usar</strong> colores primarios en proporciones adecuadas
                    </div>
                  </div>
                  <div className="guideline-item">
                    <div className="guideline-icon correct">✓</div>
                    <div className="guideline-text">
                      <strong>Mantener</strong> suficiente contraste para legibilidad
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="guideline-item">
                    <div className="guideline-icon incorrect">✕</div>
                    <div className="guideline-text">
                      <strong>No alterar</strong> los valores de color establecidos
                    </div>
                  </div>
                  <div className="guideline-item">
                    <div className="guideline-icon incorrect">✕</div>
                    <div className="guideline-text">
                      <strong>No usar</strong> colores fuera de la paleta oficial
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

export default GamaColores;
