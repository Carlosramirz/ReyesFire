import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaFire, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BSNavbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand href="#inicio" className="brand-logo">
          <FaFire className="me-2" />
          <span>ReyesFire</span>
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </BSNavbar.Toggle>
        
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('inicio')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('sobre-nosotros')}>Sobre Nosotros</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('servicios')}>Servicios</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contacto')}>Contacto</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
      

    </BSNavbar>
  );
};

export default Navbar; 