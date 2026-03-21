# COMPU3D Explorer 🖥️

**Proyecto Académico de Universidad**

Una plataforma interactiva de tienda de componentes de computadora con modelos 3D integrados, construida con Three.js para visualización de productos en tiempo real.

## 🌐 Sitio Web en Vivo

**URL:** [https://tiendaobjetos.vercel.app](https://tiendaobjetos.vercel.app)

Alojado en **Vercel** con despliegue automático desde GitHub.

---

## � Descripción del Proyecto

COMPU3D Explorer es una aplicación web interactiva desarrollada como proyecto académico que simula una tienda especializada en componentes de computadora. Lo que hace especial a este proyecto es la **integración de modelos 3D en tiempo real**, permitiendo a los usuarios explorar visualmente cada componente desde todos los ángulos antes de realizar una compra.

### Objetivo
Crear una experiencia de compra mejorada mediante la visualización tridimensional de productos, permitiendo que los clientes tomen decisiones más informadas al ver de manera interactiva las características y tamaño real de cada componente.

### Características Clave del Proyecto
- 🎯 **Visualización 3D Realista**: Cada componente se renderiza en 3D permitiendo rotación y zoom
- 🛒 **Carrito de Compras Funcional**: Sistema completo de gestión de carrito con cálculo de totales
- 📱 **100% Responsive**: Adaptado perfectamente a cualquier dispositivo (móvil, tablet, desktop)
- 🚀 **Rendimiento Optimizado**: Carga rápida y fluida incluso con modelos 3D pesados
- 🎨 **Diseño Moderno**: Interfaz visual atractiva con colores llamativos y navegación intuitiva
- 📚 **Múltiples Secciones**: Página de inicio, productos, servicios y información de contacto

---

## �📋 Características

### ✨ Características Principales
- **Visualización 3D Interactiva**: Modelos GLB de componentes de computadora renderizados con Three.js
- **Carrito de Compras**: Sistema funcional de compras con cantidades ajustables
- **Diseño Responsive**: Compatible con dispositivos móviles, tablets y desktops
- **Navbar Personalizado**: Flexbox moderno con navegación limpia
- **Múltiples Páginas**: Inicio, productos, servicios, horarios
- **Carrito Flotante**: Botón flotante en esquina inferior derecha

### 🛍️ Páginas Disponibles
1. **Inicio** (`index.html`) - Landing page con carrusel de productos
2. **Productos** (`carrito.html`) - Galería de componentes 3D + carrito
3. **Servicios** (`servicios.html`) - Oferta de servicios técnicos
4. **Horarios** (`horarios.html`) - Información de contacto y ubicación

### 🎨 Componentes 3D Incluidos
- Procesador Intel i7
- Tarjeta RAM 16GB
- Fuente de Alimentación 750W
- Disco Duro SSD 1TB
- Tarjeta Gráfica RTX 3060

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con media queries
- **JavaScript (ES6+)** - Lógica funcional
- **Three.js v0.129.0** - Renderizado 3D en navegador
- **Bootstrap 4.6.0** - Framework CSS (parcial)
- **Font Awesome 5.15** - Iconos

### 3D & Graphics
- **Three.js** - Motor 3D
- **GLTFLoader** - Carga de modelos 3D
- **OrbitControls** - Controles interactivos de cámara

### Herramientas & Deployment
- **Git** - Control de versiones
- **GitHub** - Repositorio
- **Vercel** - Hosting y CD/CI
- **GitHub Actions** - Automatización de despliegue

---

## 📁 Estructura del Proyecto

```
Objetos_Web/
├── index.html              # Página de inicio
├── carrito.html            # Página de productos
├── servicios.html          # Página de servicios
├── horarios.html           # Página de horarios
├── README.md               # Este archivo
├── css/
│   ├── style.css          # Estilos globales
│   └── carrito.css        # Estilos de productos
├── js/
│   ├── app.js             # Lógica de Three.js
│   └── compras.js         # Lógica del carrito
├── img/
│   ├── log.png            # Logo
│   ├── FondoObjetos.avif  # Textura de fondo
│   └── [imágenes 2D]
├── objetos/
│   ├── Ryzen4001.glb      # Modelo procesador
│   ├── ram.glb            # Modelo RAM
│   ├── CorsairCV750.glb   # Modelo fuente
│   ├── Almacenamiento1.glb# Modelo disco duro
│   └── Grafica.glb        # Modelo gráfica
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow
```

---

## 🚀 Deployment

### Vercel (Automático)
Cada push a `main` activa automáticamente el deployment en Vercel:

1. GitHub Actions verifica los archivos
2. Vercel construye y despliega el sitio
3. Cambios disponibles en ~1-2 minutos

### Requisitos en Vercel
```
VERCEL_TOKEN = [Token de Vercel]
VERCEL_ORG_ID = [ID de organización]
VERCEL_PROJECT_ID = [ID de proyecto]
```

---

## 🎨 Paleta de Colores

| Color | Hex Code | Uso |
|-------|----------|-----|
| Negro Oscuro | `#111111` | Fondo principal |
| Gris Navbar | `#1a1a1a` | Barra de navegación |
| Aqua (Primario) | `#00ffff` | Acentos, botones hover |
| Blanco Crema | `#fefefe` | Texto principal |
| Gris Oscuro | `#333333` | Bordes |

---

##  Créditos y Licencia

**Este es un proyecto académico de la Universidad**

### Autores
- **Maycol Melgarejo** - [mfmelgarejo04@gmail.com](mailto:mfmelgarejo04@gmail.com)
- **Paula Lozano** - [pau2004ortiz@gmail.com](mailto:pau2004ortiz@gmail.com)

**Crear**: 2024
**Versión**: 1.0.0

### Licencia
Este proyecto es académico y fue creado como trabajo universitario. Todos los derechos reservados ©2024.

---

## 🔐 Seguridad

### HTTPS Forzado
Vercel proporciona SSL/TLS automático. Todos los recursos se cargan via HTTPS.

### Validación
- HTML5 válido
- CSS3 sin hacks
- JavaScript sin vulnerabilidades conocidas

---

**¡Gracias por visitar COMPU3D Explorer! 🚀**
