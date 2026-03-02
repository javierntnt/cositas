import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Versiones.css';
import multisas2 from './img/Multisas2.png';
import multisas3 from './img/Multisas3.png';
import multisas4 from './img/Multisas4.png';
import multisas5 from './img/Multisas5.png';
import multisas6 from './img/Multisas6.png';
import multisas7 from './img/Multisas7.png';
import multisas8 from './img/Multisas8.png';
import multisas3NoBg from './img/Multisas3-removebg-preview (1) 1.png';

const Versiones = () => {
  const versiones = [
    { nombre: 'Principal', imagen: multisas3, descripcion: 'Versión principal a color' },
    { nombre: 'Alternativa 1', imagen: multisas2, descripcion: 'Variante de color' },
    { nombre: 'Alternativa 2', imagen: multisas4, descripcion: 'Versión simplificada' },
    { nombre: 'Alternativa 3', imagen: multisas5, descripcion: 'Versión compacta' },
    { nombre: 'Alternativa 4', imagen: multisas6, descripcion: 'Versión horizontal' },
    { nombre: 'Alternativa 5', imagen: multisas7, descripcion: 'Versión vertical' },
    { nombre: 'Alternativa 6', imagen: multisas8, descripcion: 'Versión isótipo' }
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
                    src={version.imagen}
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
                        src={multisas3} 
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
                        src={multisas3NoBg} 
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
