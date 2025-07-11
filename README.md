# 🔥 ReyesFire - Sitio Web Moderno

Sitio web moderno y profesional para ReyesFire, empresa especializada en protección contra incendios en Chile. Desarrollado con React, Node.js, Bootstrap y sistema de contacto automatizado.

## 🚀 Características

- **Frontend Moderno**: React 18 con Bootstrap 5 y animaciones AOS
- **Backend Seguro**: Node.js con Express, validaciones y rate limiting
- **Formulario de Contacto**: Sistema automatizado con nodemailer
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Seguridad**: Validaciones, CORS, Helmet y protección contra spam
- **Fácil Mantenimiento**: Código limpio y bien estructurado

## 📦 Tecnologías Utilizadas

### Frontend
- React 18
- React Bootstrap
- React Router DOM
- Axios
- AOS (Animate On Scroll)
- React Icons

### Backend
- Node.js
- Express
- Nodemailer
- Express Validator
- Rate Limiting
- CORS
- Helmet

## 🛠️ Instalación

### Prerequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de email para el servicio de correo

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd reyesfire-website
```

### 2. Instalar dependencias del servidor
```bash
npm install
```

### 3. Instalar dependencias del cliente
```bash
cd client
npm install
cd ..
```

### 4. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración del servidor
NODE_ENV=development
PORT=5000

# Configuración de email (Gmail)
# Para Gmail necesitas usar una contraseña de aplicación
# Ve a: https://myaccount.google.com/apppasswords
EMAIL_USER=tu-email-puente@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion

# Email donde llegarán los mensajes de contacto
CONTACT_EMAIL=contacto@reyesfire.cl
```

### 5. Ejecutar en modo desarrollo
```bash
npm run dev
```

Esto ejecutará:
- Servidor backend en `http://localhost:5000`
- Cliente React en `http://localhost:3000`

## 📧 Configuración del Email

### Para Gmail:
1. Ve a [Google Account Settings](https://myaccount.google.com/)
2. Activa la verificación en 2 pasos
3. Ve a [App Passwords](https://myaccount.google.com/apppasswords)
4. Genera una contraseña de aplicación
5. Usa esa contraseña en `EMAIL_PASS`

### Para otros proveedores:
Modifica la configuración en `server.js` línea 32:

```javascript
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.tu-proveedor.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};
```

## 🚀 Despliegue en Vercel

### 1. Preparación
```bash
# Construir el proyecto localmente (opcional)
npm run build
```

### 2. Variables de entorno en Vercel
Configura estas variables en el dashboard de Vercel:
```env
NODE_ENV=production
EMAIL_USER=tu-email-puente@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion
CONTACT_EMAIL=contacto@reyesfire.cl
```

### 3. Archivos de configuración
- `vercel.json`: Configuración de despliegue
- Build automático desde GitHub

### 4. Dominio personalizado
Puedes configurar un dominio personalizado como `reyesfire.cl` en Vercel

## 🚀 Despliegue Manual en Servidor

### 1. Construir el proyecto
```bash
npm run build
```

### 2. Variables de entorno de producción
```env
NODE_ENV=production
PORT=5000
EMAIL_USER=tu-email-puente@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion
CONTACT_EMAIL=contacto@reyesfire.cl
```

### 3. Ejecutar en producción
```bash
npm start
```

## 📁 Estructura del Proyecto

```
reyesfire-website/
├── client/                 # Aplicación React
│   ├── public/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Páginas principales
│   │   ├── styles/         # Estilos CSS
│   │   └── assets/         # Imágenes y recursos
│   └── package.json
├── server.js              # Servidor Express
├── package.json           # Dependencias del servidor
└── README.md
```

## 🔒 Seguridad

- **Rate Limiting**: Máximo 3 mensajes por IP cada 15 minutos
- **Validación de Datos**: Validación estricta de formularios
- **Sanitización**: Limpieza de datos de entrada
- **CORS**: Configurado para dominios específicos
- **Helmet**: Headers de seguridad
- **No Exposición de Datos**: No se almacenan números de teléfono ni datos sensibles

## 🎨 Personalización

### Colores Corporativos
Los colores están definidos en `client/src/styles/index.css`:

```css
:root {
  --primary-color: #d32f2f;    /* Rojo principal */
  --primary-dark: #b71c1c;     /* Rojo oscuro */
  --secondary-color: #ff5722;  /* Naranja */
  --accent-color: #ffc107;     /* Amarillo */
}
```

### Servicios
Modifica el array `services` en `client/src/pages/Home.js` para agregar o cambiar servicios.

### Contenido
Todo el contenido está en español y puede ser modificado directamente en los componentes.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

1. Revisa la documentación
2. Verifica la configuración de email
3. Consulta los logs del servidor
4. Contacta al desarrollador

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📤 Subir a GitHub y Desplegar en Vercel

### Paso 1: Inicializar Git y subir a GitHub
```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🔥 Initial commit - ReyesFire website"

# Conectar con repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/reyesfire-website.git

# Subir código
git push -u origin main
```

### Paso 2: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
2. Haz clic en "New Project"
3. Selecciona tu repositorio `reyesfire-website`
4. Vercel detectará automáticamente la configuración
5. Configura las variables de entorno:
   - `EMAIL_USER`: Tu email puente
   - `EMAIL_PASS`: Contraseña de aplicación
   - `CONTACT_EMAIL`: Email destino de ReyesFire
6. Haz clic en "Deploy"

### Paso 3: Configuración adicional
- **Dominio personalizado**: Puedes agregar `reyesfire.cl` en la configuración
- **Builds automáticos**: Cada push a main desplegará automáticamente
- **Variables de entorno**: Se pueden editar en el dashboard de Vercel

---

**Desarrollado con ❤️ para ReyesFire** #   R e y e s F i r e  
 