import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#hero" className="brand-logo">
          <h3 className="mb-0">MULTIAXIS SAS</h3>
          <span className="brand-subtitle">Manual de Identidad</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#concepto">Concepto</Nav.Link>
            <Nav.Link href="#simbologia">Simbología</Nav.Link>
            <Nav.Link href="#planimetria">Planimetría</Nav.Link>
            <Nav.Link href="#gama-colores">Colores</Nav.Link>
            <Nav.Link href="#tipografia">Tipografía</Nav.Link>
            <Nav.Link href="#aplicaciones">Aplicaciones</Nav.Link>
            <Nav.Link href="#versiones">Versiones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
