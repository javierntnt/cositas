import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Versiones.css';

const Versiones = () => {
  const versiones = [
    { nombre: 'Principal', archivo: 'Multisas3.png', descripcion: 'Versión principal a color' },
    { nombre: 'Alternativa 1', archivo: 'Multisas2.png', descripcion: 'Variante de color' },
    { nombre: 'Alternativa 2', archivo: 'Multisas4.png', descripcion: 'Versión simplificada' },
    { nombre: 'Alternativa 3', archivo: 'Multisas5.png', descripcion: 'Versión compacta' },
    { nombre: 'Alternativa 4', archivo: 'Multisas6.png', descripcion: 'Versión horizontal' },
    { nombre: 'Alternativa 5', archivo: 'Multisas7.png', descripcion: 'Versión vertical' },
    { nombre: 'Alternativa 6', archivo: 'Multisas8.png', descripcion: 'Versión isótipo' }
  ];

  return (
    <section id="versiones" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Versiones del Logotipo</h2>
            <p className="text-center mb-5">
              Variaciones oficiales del logo para diferentes aplicaciones
            </p>
          </Col>
        </Row>

        <Row>
          {versiones.map((version, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div className="version-card">
                <div className="version-preview">
                  <img 
                    src={`/src/components/img/${version.archivo}`}
                    alt={version.nombre}
                    className="version-logo"
                  />
                </div>
                <div className="version-info">
                  <h4>{version.nombre}</h4>
                  <p>{version.descripcion}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="versiones-guide">
              <h3>Guía de Uso de Versiones</h3>
              <Row className="mt-4">
                <Col md={6} className="mb-4">
                  <div className="uso-card">
                    <h5>Fondos Claros</h5>
                    <div className="uso-example fondo-claro">
                      <img 
                        src="/src/components/img/Multisas3.png" 
                        alt="Sobre fondo claro"
                        className="uso-logo"
                      />
                    </div>
                    <p>Usar versión a color completo sobre fondos blancos o claros</p>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="uso-card">
                    <h5>Fondos Oscuros</h5>
                    <div className="uso-example fondo-oscuro">
                      <img 
                        src="/src/components/img/Multisas3-removebg-preview (1) 1.png" 
                        alt="Sobre fondo oscuro"
                        className="uso-logo"
                      />
                    </div>
                    <p>Usar versión en colores claros sobre fondos oscuros</p>
                  </div>
                </Col>
              </Row>

              <div className="prohibiciones">
                <h4>Usos No Permitidos</h4>
                <Row>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="prohibicion-item">
                      <div className="prohibicion-icon">✕</div>
                      <p>No distorsionar</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="prohibicion-item">
                      <div className="prohibicion-icon">✕</div>
                      <p>No rotar</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="prohibicion-item">
                      <div className="prohibicion-icon">✕</div>
                      <p>No cambiar colores</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="prohibicion-item">
                      <div className="prohibicion-icon">✕</div>
                      <p>No agregar efectos</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Versiones;
