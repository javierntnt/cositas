import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nombre Apellido',
      position: 'CEO & Fundador',
      description: 'Breve descripción del miembro del equipo.'
    },
    {
      name: 'Nombre Apellido',
      position: 'Director de Operaciones',
      description: 'Breve descripción del miembro del equipo.'
    },
    {
      name: 'Nombre Apellido',
      position: 'Jefe de Proyectos',
      description: 'Breve descripción del miembro del equipo.'
    },
    {
      name: 'Nombre Apellido',
      position: 'Especialista Técnico',
      description: 'Breve descripción del miembro del equipo.'
    }
  ];

  return (
    <section id="team" className="section section-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="text-center mb-5">
              Conoce a los profesionales que hacen posible nuestro éxito
            </p>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="team-card h-100">
                <div className="team-image">
                  <div className="image-placeholder">Foto</div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.position}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
