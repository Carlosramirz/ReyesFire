const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting para el formulario de contacto
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 3, // máximo 3 mensajes por IP cada 15 minutos
  message: {
    error: 'Demasiados mensajes enviados. Intenta nuevamente en 15 minutos.'
  }
});

// Configuración del transporter de nodemailer
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // Puedes cambiar por otro servicio
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validaciones para el formulario
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .withMessage('El nombre solo puede contener letras y espacios'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Debe ser un email válido'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('El asunto debe tener entre 5 y 200 caracteres'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('El mensaje debe tener entre 10 y 1000 caracteres')
];

// Endpoint para el formulario de contacto
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Verificar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Crear el transporter
    const transporter = createTransporter();

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL, // Email de destino de ReyesFire
      subject: `[ReyesFire] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #d32f2f; color: white; padding: 20px; text-align: center;">
            <h1>🔥 ReyesFire - Nuevo Mensaje de Contacto</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <h2 style="color: #d32f2f;">Detalles del Contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Nombre:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Asunto:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>
            <h3 style="color: #d32f2f; margin-top: 20px;">Mensaje:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #d32f2f; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              Este mensaje fue enviado desde el formulario de contacto de reyesfire.cl
            </p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor. Intenta nuevamente más tarde.'
    });
  }
});

// Servir archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor ReyesFire corriendo en puerto ${PORT}`);
}); 