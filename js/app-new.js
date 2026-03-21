/* ====================================================
   COMPU3D EXPLORER - SISTEMA DE VISUALIZACIÓN 3D
   Script principal para cargar y renderizar modelos 3D con Three.js
   ===================================================== */

// Importar Three.js y sus módulos desde CDN (HTTPS para compatibilidad con Vercel)
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

// ========== INICIALIZACIÓN ==========
// Esperar a que el DOM esté completamente cargado antes de crear las escenas 3D
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que los contenedores HTML estén listos
    // (especialmente importante cuando compras.js también se ejecuta)
    setTimeout(setupScene, 100);
});

// ========== FUNCIÓN PRINCIPAL DE CONFIGURACIÓN ==========
/**
 * setupScene()
 * Configura todas las escenas 3D del sitio
 * Crea 5 modelos 3D (Procesador, RAM, Fuente, Disco Duro, Tarjeta Gráfica)
 */
function setupScene() {
    // ========== FUNCIÓN AUXILIAR: createScene() ==========
    /**
     * Crea una escena Three.js completa con modelo 3D, cámara, luz y controles
     * @param {string} containerId - ID del elemento HTML donde se renderizará
     * @param {string} modelPath - Ruta del archivo .glb del modelo 3D
     * @param {array} position - Posición [x, y, z] del modelo en la escena
     * @param {array} scale - Escala [x, y, z] del modelo
     * @param {array} rotation - Rotación [x, y, z] del modelo en radianes
     * @param {array} cameraPos - Posición [x, y, z] de la cámara
     */
    function createScene(containerId, modelPath, position, scale, rotation, cameraPos) {
        // ===== PASO 1: Validar Contenedor =====
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Contenedor ${containerId} no encontrado`);
            return; // Salir si no existe el contenedor
        }

        // ===== PASO 2: Obtener Dimensiones del Contenedor =====
        // El canvas se adaptará al tamaño del contenedor responsivamente
        let width = container.clientWidth || 400; // Ancho mínimo por defecto
        let height = container.clientHeight || 300; // Alto mínimo por defecto

        // Ajustar altura para pantallas móviles para mejor rendimiento
        if (window.innerWidth < 768) {
            height = Math.min(height, 250); // Máximo 250px en móvil
        }

        // ===== PASO 3: Crear Cámara =====
        // Cámara de perspectiva con ratio de aspecto basado en el contenedor
        const camera = new THREE.PerspectiveCamera(
            65, // Campo de visión
            width / height, // Ratio de aspecto
            0.1, // Plano cercano
            1000 // Plano lejano
        );
        camera.position.set(...cameraPos); // Posicionar la cámara

        // ===== PASO 4: Crear Escena =====
        const scene = new THREE.Scene();

        // Cargar textura de fondo
        const backgroundTexture = new THREE.TextureLoader().load('/img/FondoObjetos.avif');
        scene.background = backgroundTexture;

        // ===== PASO 5: Agregar Iluminación =====
        // Luz ambiental: ilumina toda la escena uniformemente
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        // Luz direccional: simula la luz del sol
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // ===== PASO 6: Cargar Modelo 3D =====
        let model; // Variable para almacenar el modelo cargado
        const loader = new GLTFLoader();

        loader.load(modelPath, function (gltf) {
            // gltf.scene contiene el modelo 3D completo
            model = gltf.scene;

            // Recorrer todos los objetos dentro del modelo
            model.traverse((child) => {
                // Si el objeto es una malla (mesh), ajustar sus propiedades
                if (child.isMesh) {
                    // Permitir transparencia en el modelo
                    child.material.transparent = true;
                    child.material.opacity = 1.0; // Opacidad completa
                    child.material.alphaTest = 0.5; // Umbral para transparencia
                    child.material.side = THREE.DoubleSide; // Renderizar ambos lados
                }
            });

            // Aplicar transformaciones al modelo
            model.position.set(...position); // Posicionar
            model.scale.set(...scale); // Escalar
            model.rotation.set(...rotation); // Rotar

            // Agregar el modelo a la escena
            scene.add(model);

            // Log para debugging
            console.log(`Modelo ${modelPath.split('/').pop()} cargado correctamente`);
        });

        // ===== PASO 7: Crear Renderer (Motor de Renderizado) =====
        // WebGLRenderer renderiza la escena usando WebGL
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height); // Tamaño del canvas
        renderer.setPixelRatio(window.devicePixelRatio); // Escala para pantallas de alta densidad

        // Agregar el canvas al contenedor HTML
        container.appendChild(renderer.domElement);

        // ===== PASO 8: Agregar Controles Interactivos =====
        // OrbitControls permite rotar, hacer zoom y panear la vista
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 4, 0); // Punto alrededor del cual orbitar
        controls.update(); // Actualizar

        // ===== PASO 9: Crear Loop de Animación =====
        /**
         * animate()
         * Función que se ejecuta 60 veces por segundo (60 FPS)
         * Actualiza la escena continuamente
         */
        const animate = () => {
            // Solicitar el siguiente frame de animación
            requestAnimationFrame(animate);

            // Actualizar los controles
            controls.update();

            // Renderizar la escena con la cámara actual
            renderer.render(scene, camera);

            // Rotar el modelo lentamente si está cargado
            if (model) {
                model.rotation.y += 0.001; // Incremento pequeño para rotación suave
            }
        };

        // Iniciar la animación
        animate();

        // ===== PASO 10: Manejo de Redimensionamiento =====
        /**
         * handleResize()
         * Se ejecuta cuando la ventana cambia de tamaño
         * Ajusta la cámara y el renderer al nuevo tamaño
         */
        const handleResize = () => {
            // Obtener nuevas dimensiones del contenedor
            const newWidth = container.clientWidth || 400;
            const newHeight = container.clientHeight || 300;

            // Actualizar ratio de aspecto de la cámara
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            // Redimensionar el renderer
            renderer.setSize(newWidth, newHeight);
        };

        // Escuchar eventos de redimensionamiento
        window.addEventListener('resize', handleResize);
    }

    // ========== LLAMAR A createScene() PARA CADA MODELO ==========
    // Parámetros: (containerId, modelPath, [position], [scale], [rotation], [cameraPos])

    // 1. Procesador Intel i7
    createScene(
        'containerProcesador',
        '/objetos/Ryzen4001.glb',
        [0, 0, 0],      // Posición
        [6, 6, 6],      // Escala (más grande)
        [5, 1, 1],      // Rotación
        [0, 30, 0]      // Posición de cámara
    );

    // 2. Tarjeta RAM
    createScene(
        'containerRam',
        '/objetos/ram.glb',
        [0, 0, 0],
        [0.7, 0.7, 0.7],
        [0, 2.4, 0],
        [0, 6, 20]
    );

    // 3. Fuente de Alimentación
    createScene(
        'containerFuente',
        '/objetos/CorsairCV750.glb',
        [0, 2, 0],
        [0.6, 0.6, 0.6],
        [1, 0, 0],
        [0, 5, 20]
    );

    // 4. Disco Duro (Almacenamiento)
    createScene(
        'containerDiscoD',
        '/objetos/Almacenamiento1.glb',
        [0, 0, -5],
        [0.5, 0.5, 0.5],
        [1, 0, 0],
        [0, 5, 20]
    );

    // 5. Tarjeta Gráfica
    createScene(
        'containerGrafica',
        '/objetos/Grafica.glb',
        [-5, 0, 0],
        [0.2, 0.2, 0.2],
        [0, 0, 0],
        [0, 5, 20]
    );
}

// ========== EVENTO PERSONALIZADO ==========
// Dispara un evento cuando Three.js está completamente listo
// Esto permite que compras.js sepa cuándo puede acceder a los contenedores
document.dispatchEvent(new Event('threejsReady'));
