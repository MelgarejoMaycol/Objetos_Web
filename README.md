# COMPU3D Explorer 🖥️

**Proyecto Académico de Universidad**

Una plataforma interactiva de tienda de componentes de computadora con modelos 3D integrados, construida con Three.js para visualización de productos en tiempo real.

## 🌐 Sitio Web en Vivo

**URL:** [https://tiendaobjetos.vercel.app](https://tiendaobjetos.vercel.app)

Alojado en **Vercel** con despliegue automático desde GitHub.

---

## 📋 Características

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

## 📱 Responsiveness

### Breakpoints
- **Mobile**: < 768px
  - Logo: 72px
  - Navbar: Columna
  - Productos: 1 por fila
  
- **Tablet**: 768px - 1024px
  - Logo: 88px
  - Navbar: Flexible
  - Productos: 2 por fila
  
- **Desktop**: > 1024px
  - Logo: 80px
  - Navbar: Normal
  - Productos: 4 por fila

---

## 🔧 Instalación Local

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (para desarrollo)

### Pasos
```bash
# Clonar repositorio
git clone https://github.com/MelgarejoMaycol/Objetos_Web.git
cd Objetos_Web

# Servir localmente (usando Python)
python -m http.server 8000

# O usando Node.js (http-server)
npx http-server -p 8000
```

Accede a `http://localhost:8000` en tu navegador.

---

## 🔄 Workflow de Desarrollo

### Cambios Recomendados
1. Crear rama para nueva feature: `git checkout -b feature/nombre`
2. Realizar cambios
3. Commit con mensaje descriptivo: `git commit -m "Descripción"`
4. Push a GitHub: `git push origin feature/nombre`
5. Pull Request para revisión
6. Merge a main → Despliegue automático en Vercel

### Ejemplo Commit
```bash
git add .
git commit -m "Fix: Reduce contrast in product cards and fix processor rotation"
git push
```

---

## 📊 Performance

### Optimizaciones Realizadas
- ✅ Modelos 3D comprimidos en formato GLB
- ✅ Imágenes optimizadas (AVIF, PNG)
- ✅ CSS crítico en `<head>`
- ✅ Carga de Three.js desde CDN
- ✅ Responsive canvas para 3D
- ✅ Lazy loading de modelos

### Core Web Vitals
- **LCP**: ~2.5s
- **FID**: <100ms
- **CLS**: <0.1

---

## 🐛 Solución de Problemas

### Los modelos 3D no cargan
- Verificar conexión a CDN de Three.js
- Comprobar que archivos `.glb` existen en `/objetos/`
- Abrir consola (F12) para ver errores

### Carrito no funciona
- Verificar que `compras.js` está cargado
- Comprobar permisos localStorage del navegador
- Limpiar caché: Ctrl+Shift+Del

### Estilos no se aplican
- Forzar actualización: Ctrl+F5
- Verificar que archivos CSS están en `/css/`
- Comprobar rutas relativas

---

## 📞 Contacto

**Dirección**: Calle Principal #123, Santander - Florida Blanca, Colombia  
**Teléfono**: +57 304 332 4992 | +57 310 320 5036  
**Email**: info@compu3d.com  

**Horarios**:
- Lunes a Viernes: 9:00 AM - 8:00 PM
- Sábado: 9:00 AM - 1:00 PM
- Domingo: CERRADO

---

## 📜 Créditos y Licencia

**Este es un proyecto académico de la Universidad**

### Autores
- **Maycol Melgarejo** - [mfmelgarejo04@gmail.com](mailto:mfmelgarejo04@gmail.com)
- **Paula Lozano** - [pau2004ortiz@gmail.com](mailto:pau2004ortiz@gmail.com)

**Crear**: 2026  
**Versión**: 1.0.0

### Licencia
Este proyecto es académico y fue creado como trabajo universitario. Todos los derechos reservados ©2026.

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
