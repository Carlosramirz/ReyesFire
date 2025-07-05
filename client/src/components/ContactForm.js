import React, { useState } from 'react';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaUser, FaComment, FaHeading } from 'react-icons/fa';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        showAlert('success', response.data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
        showAlert('danger', errorMessages);
      } else if (error.response?.data?.message) {
        showAlert('danger', error.response.data.message);
      } else {
        showAlert('danger', 'Error al enviar el mensaje. Intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-section">
      <Card className="shadow-lg border-0" data-aos="fade-up">
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <h3 className="text-primary mb-3">
              <FaEnvelope className="me-2" />
              Contáctanos
            </h3>
            <p className="text-muted">
              Envíanos tu consulta y nos pondremos en contacto contigo lo antes posible
            </p>
          </div>

          {alert.show && (
            <Alert variant={alert.type} dismissible onClose={() => setAlert({ show: false })}>
              {alert.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaUser className="me-2 text-primary" />
                    Nombre Completo
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaEnvelope className="me-2 text-primary" />
                    Correo Electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>
                <FaHeading className="me-2 text-primary" />
                Asunto
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                required
                className="form-control-custom"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <FaComment className="me-2 text-primary" />
                Mensaje
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos más detalles sobre tu proyecto o consulta..."
                required
                className="form-control-custom"
              />
            </Form.Group>

            <div className="text-center">
              <Button 
                type="submit" 
                size="lg"
                disabled={loading}
                className="btn-custom"
              >
                {loading ? (
                  <>
                    <div className="loading-spinner me-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaEnvelope className="me-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>


    </div>
  );
};

export default ContactForm; 