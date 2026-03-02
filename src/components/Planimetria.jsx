import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Planimetria.css';

const Planimetria = () => {
  return (
    <section id="planimetria" className="section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Planimetría</h2>
            <p className="text-center mb-5">
              Construcción y proporciones del logotipo
            </p>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <div className="planimetria-guide">
              <h3>Área de Seguridad</h3>
              <p>
                El área de seguridad alrededor del logo debe mantenerse libre de cualquier elemento gráfico 
                o texto. Esta zona garantiza la correcta visibilidad e impacto del logotipo.
              </p>
              <div className="planimetria-visual">
                <img 
                  src="/src/components/img/Multisas3.png" 
                  alt="Planimetría del logo" 
                  className="planimetria-logo"
                />
                <div className="grid-overlay"></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="planimetria-card">
              <h4>Tamaño Mínimo</h4>
              <p>El logo nunca debe usarse en un tamaño inferior a:</p>
              <div className="medida-box">
                <span className="medida-numero">30mm</span>
                <span className="medida-label">Impreso</span>
              </div>
              <div className="medida-box">
                <span className="medida-numero">120px</span>
                <span className="medida-label">Digital</span>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="planimetria-card">
              <h4>Proporciones</h4>
              <p>Mantener siempre la proporción original del logo:</p>
              <div className="proporcion-visual">
                <div className="correct-icon">✓</div>
                <p className="text-success">Correcto: Escalar proporcionalmente</p>
              </div>
              <div className="proporcion-visual mt-3">
                <div className="incorrect-icon">✕</div>
                <p className="text-danger">Incorrecto: Distorsionar</p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="planimetria-card">
              <h4>Espacio Vital</h4>
              <p>Margen mínimo alrededor del logo:</p>
              <div className="medida-box">
                <span className="medida-numero">X</span>
                <span className="medida-label">
                  Donde X = Altura de la letra principal
                </span>
              </div>
              <p className="mt-3 text-muted small">
                Mantener un margen de al menos 1X en todos los lados
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Planimetria;
