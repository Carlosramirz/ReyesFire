import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFire, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section bg-dark text-light">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand mb-3">
              <FaFire className="me-2" style={{ color: 'var(--primary-color)' }} />
              <span className="h4">ReyesFire</span>
            </div>
            <p className="text-muted">
              Expertos en protección contra incendios con más de 15 años de experiencia. 
              Ofrecemos soluciones completas y confiables para mantener seguras tus instalaciones.
            </p>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3">Servicios</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#servicios">Red Húmeda</a></li>
              <li><a href="#servicios">Red Seca</a></li>
              <li><a href="#servicios">Detectores de Humo</a></li>
              <li><a href="#servicios">Extintores</a></li>
              <li><a href="#servicios">Sistemas de Descarga</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="mb-3">Empresa</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#servicios">Nuestros Servicios</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3">Contacto</h5>
            <div className="contact-info">
              <div className="contact-item mb-2">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span>Chile - Cobertura Nacional</span>
              </div>
              <div className="contact-item mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <span>contacto@reyesfire.cl</span>
              </div>
              <div className="contact-item">
                <FaPhone className="me-2 text-primary" />
                <span>Contáctanos por formulario</span>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" style={{ borderColor: '#495057' }} />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-muted">
              © {currentYear} ReyesFire. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-muted">
              Desarrollado con ❤️ para la seguridad
            </p>
          </Col>
        </Row>
      </Container>
      

    </footer>
  );
};

export default Footer; 