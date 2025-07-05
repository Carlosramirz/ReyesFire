import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { 
  FaFire, 
  FaShieldAlt, 
  FaTint, 
  FaSmokingBan, 
  FaFireExtinguisher, 
  FaBell, 
  FaWind,
  FaTools,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaIndustry
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaTint />,
      title: "Red Húmeda",
      description: "Sistemas de red húmeda para seguridad completa de tu empresa con la mejor tecnología."
    },
    {
      icon: <FaWind />,
      title: "Red Seca",
      description: "Instalación de red seca profesional para la seguridad integral de tu empresa."
    },
    {
      icon: <FaSmokingBan />,
      title: "Detectores de Humo",
      description: "Instalación y mantención de detectores de humo con tecnología avanzada."
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Extintores",
      description: "Instalación y mantención de cualquier tipo de extintores certificados."
    },
    {
      icon: <FaTools />,
      title: "Carretes",
      description: "Instalación de carretes contra incendios, mantención y venta especializada."
    },
    {
      icon: <FaBell />,
      title: "Alarmas",
      description: "Venta, reparación y mantención de alarmas contra incendios de última tecnología."
    },
    {
      icon: <FaShieldAlt />,
      title: "Sistemas de Descargas",
      description: "Sistemas por gases como agentes limpios contra la extinción de incendios."
    },
    {
      icon: <FaIndustry />,
      title: "Bombas de Agua",
      description: "Instalación y mantenimiento de bombas de agua para sistemas de redes de incendio."
    }
  ];

  const features = [
    {
      icon: <FaClock />,
      title: "15 Años de Experiencia",
      description: "Contamos con más de 15 años de experiencia en el mercado"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Cobertura Nacional",
      description: "Realizamos instalaciones en todo el territorio chileno"
    },
    {
      icon: <FaCheckCircle />,
      title: "Calidad Garantizada",
      description: "Seguimos normativas NFPA 22 y utilizamos tecnología Isoprevent"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="floating-elements"></div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-white" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">
                Expertos en <span className="text-warning">Protección</span> Contra Incendios
              </h1>
              <p className="lead mb-4">
                Ofrecemos soluciones completas en sistemas de redes de incendio, 
                detectores de humo, extintores y más. Con más de 15 años de experiencia 
                protegiendo empresas en todo Chile.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button 
                  variant="warning" 
                  size="lg" 
                  onClick={() => scrollToSection('servicios')}
                  className="me-3"
                >
                  <FaFire className="me-2" />
                  Nuestros Servicios
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  onClick={() => scrollToSection('contacto')}
                >
                  Contactar Ahora
                </Button>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-delay="200">
              <div className="hero-image text-center">
                <div className="hero-icon">
                  <FaFire size={200} className="text-warning hero-flame" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="section-padding bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold text-primary mb-4">
                Sobre Nosotros
              </h2>
              <p className="lead mb-4">
                Somos expertos en redes de incendio con una amplia trayectoria en el mercado chileno.
              </p>
              <p className="mb-4">
                Ofrecemos una amplia gama de servicios especializados en redes de incendio, 
                incluyendo sistemas de red húmeda, control de acceso, agentes limpios y 
                soluciones para edificios en construcción. Nos dedicamos a todo lo relacionado 
                con la protección contra incendios, garantizando seguridad y confiabilidad en cada proyecto.
              </p>
              
              <Row className="mt-5">
                {features.map((feature, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <div className="text-center">
                      <div className="service-icon mb-3">
                        {feature.icon}
                      </div>
                      <h6 className="fw-bold">{feature.title}</h6>
                      <p className="small text-muted">{feature.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-delay="200">
              <div className="about-image">
                <Card className="border-0 shadow-lg">
                  <Card.Body className="p-5 text-center">
                    <FaShieldAlt size={80} className="text-primary mb-3" />
                    <h4 className="text-primary mb-3">Protección Garantizada</h4>
                    <p className="text-muted">
                      Implementamos tecnología de vanguardia para crear redes de incendio 
                      efectivas y fiables, protegiendo tus instalaciones con los estándares 
                      más altos de seguridad.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary mb-4">
              Nuestros Servicios
            </h2>
            <p className="lead text-muted">
              Soluciones completas para la protección contra incendios
            </p>
          </div>
          
          <Row>
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card 
                  className="service-card h-100 border-0 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="p-4">
                    <div className="service-icon mb-3">
                      {service.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-0">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Bombas Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">
                Bombas de Agua
              </h2>
              <h4 className="mb-4">Instalación y Mantenimiento de Alta Calidad</h4>
              <p className="lead mb-4">
                Expertos en instalación de bombas de agua de alta calidad para sistemas 
                de redes de incendio, garantizando la seguridad y eficiencia de nuestros clientes.
              </p>
              
              <div className="mb-4">
                <h5 className="mb-3">
                  <FaCheckCircle className="me-2" />
                  Terminación de Salas de Bombas
                </h5>
                <p>
                  Aseguramos que cada componente esté instalado y funcionando correctamente, 
                  garantizando la máxima eficiencia y seguridad.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="mb-3">
                  <FaTools className="me-2" />
                  Tecnologías y Normativas
                </h5>
                <p>
                  Implementamos tecnologías avanzadas como Isoprevent y seguimos normativas 
                  NFPA 22 para garantizar la confiabilidad y eficacia de nuestros sistemas.
                </p>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-delay="200">
              <div className="text-center">
                <div className="pump-icon mb-4">
                  <FaIndustry size={150} className="text-warning" />
                </div>
                <Card className="border-0 shadow-lg">
                  <Card.Body className="p-4">
                    <h5 className="text-primary mb-3">Servicios Especializados</h5>
                    <ul className="list-unstyled text-start">
                      <li className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        Instalación de bombas centrífugas
                      </li>
                      <li className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        Mantenimiento preventivo y correctivo
                      </li>
                      <li className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        Certificación según normativas
                      </li>
                      <li className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        Pruebas de funcionamiento
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary mb-4">
              Contáctanos
            </h2>
            <p className="lead text-muted">
              ¿Necesitas protección contra incendios? Estamos aquí para ayudarte
            </p>
          </div>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>


    </div>
  );
};

export default Home; 