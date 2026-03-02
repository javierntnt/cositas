import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TipografiaSection.css';

const TipografiaSection = () => {
  return (
    <section id="tipografia" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Tipografía Corporativa</h2>
            <p className="text-center mb-5">
              Fuentes tipográficas oficiales de la marca
            </p>
          </Col>
        </Row>

        {/* Fuente Principal */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="tipografia-card-main">
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <h3 className="tipo-title">Montserrat</h3>
                    <p className="tipo-categoria">Tipografía Principal - Títulos</p>
                    <p className="tipo-descripcion">
                      Fuente geométrica moderna y versátil, ideal para títulos y elementos destacados. 
                      Su estructura limpia transmite profesionalismo y confianza.
                    </p>
                    <div className="tipo-pesos">
                      <h5>Pesos Disponibles:</h5>
                      <div className="peso-item" style={{ fontWeight: 300 }}>Light 300</div>
                      <div className="peso-item" style={{ fontWeight: 400 }}>Regular 400</div>
                      <div className="peso-item" style={{ fontWeight: 500 }}>Medium 500</div>
                      <div className="peso-item" style={{ fontWeight: 600 }}>SemiBold 600</div>
                      <div className="peso-item" style={{ fontWeight: 700 }}>Bold 700</div>
                      <div className="peso-item" style={{ fontWeight: 800 }}>ExtraBold 800</div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="tipo-sample montserrat-sample">
                      <div className="alfabeto">
                        <h4>Aa Bb Cc Dd Ee Ff</h4>
                        <h4>Gg Hh Ii Jj Kk Ll</h4>
                        <h4>Mm Nn Ññ Oo Pp</h4>
                        <h4>Qq Rr Ss Tt Uu Vv</h4>
                        <h4>Ww Xx Yy Zz</h4>
                        <h4 className="numeros">0123456789</h4>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Fuente Secundaria */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="tipografia-card-secondary">
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <div className="tipo-sample roboto-sample">
                      <div className="alfabeto">
                        <p>Aa Bb Cc Dd Ee Ff Gg Hh</p>
                        <p>Ii Jj Kk Ll Mm Nn Ññ Oo</p>
                        <p>Pp Qq Rr Ss Tt Uu Vv</p>
                        <p>Ww Xx Yy Zz</p>
                        <p className="numeros">0123456789</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <h3 className="tipo-title">Roboto</h3>
                    <p className="tipo-categoria">Tipografía Secundaria - Textos</p>
                    <p className="tipo-descripcion">
                      Fuente sans-serif altamente legible, diseñada para textos largos y contenido general. 
                      Perfecta legibilidad tanto en digital como en impreso.
                    </p>
                    <div className="tipo-pesos">
                      <h5>Pesos Disponibles:</h5>
                      <div className="peso-item" style={{ fontFamily: 'Roboto', fontWeight: 300 }}>Light 300</div>
                      <div className="peso-item" style={{ fontFamily: 'Roboto', fontWeight: 400 }}>Regular 400</div>
                      <div className="peso-item" style={{ fontFamily: 'Roboto', fontWeight: 500 }}>Medium 500</div>
                      <div className="peso-item" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Bold 700</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Jerarquía Tipográfica */}
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="jerarquia-container">
              <h3 className="subsection-title">Jerarquía Tipográfica</h3>
              <div className="jerarquia-samples">
                <div className="jerarquia-item">
                  <h1 className="sample-h1">Título H1 - Montserrat Bold</h1>
                  <span className="jerarquia-specs">48px / 700 weight</span>
                </div>
                <div className="jerarquia-item">
                  <h2 className="sample-h2">Título H2 - Montserrat SemiBold</h2>
                  <span className="jerarquia-specs">40px / 600 weight</span>
                </div>
                <div className="jerarquia-item">
                  <h3 className="sample-h3">Título H3 - Montserrat SemiBold</h3>
                  <span className="jerarquia-specs">32px / 600 weight</span>
                </div>
                <div className="jerarquia-item">
                  <h4 className="sample-h4">Título H4 - Montserrat Medium</h4>
                  <span className="jerarquia-specs">24px / 500 weight</span>
                </div>
                <div className="jerarquia-item">
                  <p className="sample-p">
                    Párrafo - Roboto Regular. Esta es una muestra de texto largo para demostrar 
                    cómo se ve la tipografía en párrafos extensos. La fuente Roboto ofrece 
                    excelente legibilidad incluso en tamaños pequeños.
                  </p>
                  <span className="jerarquia-specs">16px / 400 weight / line-height: 1.6</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Directrices de Uso */}
        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="tipo-guidelines">
              <h4>Directrices de Uso Tipográfico</h4>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="guideline-box">
                    <div className="guideline-icon-tipo">✓</div>
                    <h5>Hacer</h5>
                    <ul>
                      <li>Usar Montserrat para títulos y encabezados</li>
                      <li>Usar Roboto para cuerpo de texto</li>
                      <li>Mantener jerarquía clara de tamaños</li>
                      <li>Usar suficiente interlineado (1.5-1.6)</li>
                    </ul>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="guideline-box incorrect-box">
                    <div className="guideline-icon-tipo incorrect">✕</div>
                    <h5>No Hacer</h5>
                    <ul>
                      <li>No usar fuentes fuera de la paleta oficial</li>
                      <li>No distorsionar o alterar las proporciones</li>
                      <li>No usar tamaños menores a 12px</li>
                      <li>No usar más de 2 familias tipográficas</li>
                    </ul>
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

export default TipografiaSection;
