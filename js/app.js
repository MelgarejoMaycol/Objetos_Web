import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que compras.js haya creado los contenedores
    setTimeout(setupScene, 100);
});

function setupScene() {
    // Función auxiliar para crear una escena
    function createScene(containerId, modelPath, position, scale, rotation, cameraPos) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Contenedor ${containerId} no encontrado`);
            return;
        }

        // Obtener tamaño del contenedor con valores por defecto responsivos
        let width = container.clientWidth || 400;
        let height = container.clientHeight || 300;

        // Ajustar altura para pantallas móviles
        if (window.innerWidth < 768) {
            height = Math.min(height, 250);
        }

        // Crear cámara con aspect ratio correcto
        const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
        camera.position.set(...cameraPos);

        // Crear escena
        const scene = new THREE.Scene();
        const backgroundTexture = new THREE.TextureLoader().load('/img/FondoObjetos.avif');
        scene.background = backgroundTexture;

        // Luces
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Cargar modelo
        let model;
        const loader = new GLTFLoader();
        loader.load(modelPath, function (gltf) {
            model = gltf.scene;

            model.traverse((child) => {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.opacity = 1.0;
                    child.material.alphaTest = 0.5;
                    child.material.side = THREE.DoubleSide;
                }
            });

            model.position.set(...position);
            model.scale.set(...scale);
            model.rotation.set(...rotation);

            scene.add(model);
            console.log(`Modelo ${modelPath.split('/').pop()} cargado correctamente`);
        });

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Controles
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 4, 0);
        controls.update();

        // Loop de animación
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);

            if (model) {
                model.rotation.y += 0.001;
            }
        };
        animate();

        // Redimensionar
        const handleResize = () => {
            const newWidth = container.clientWidth || 400;
            const newHeight = container.clientHeight || 300;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener('resize', handleResize);
    }

    // Crear todas las escenas
    createScene('containerProcesador', '/objetos/Ryzen4001.glb', [0, 0, 0], [6, 6, 6], [0, 2.4, 0], [0, 30, 0]);
    createScene('containerRam', '/objetos/ram.glb', [0, 0, 0], [0.7, 0.7, 0.7], [0, 2.4, 0], [0, 6, 20]);
    createScene('containerFuente', '/objetos/CorsairCV750.glb', [0, 2, 0], [0.6, 0.6, 0.6], [1, 0, 0], [0, 5, 20]);
    createScene('containerDiscoD', '/objetos/Almacenamiento1.glb', [0, 0, -5], [0.5, 0.5, 0.5], [1, 0, 0], [0, 5, 20]);
    createScene('containerGrafica', '/objetos/Grafica.glb', [-5, 0, 0], [0.2, 0.2, 0.2], [0, 0, 0], [0, 5, 20]);
}

// Evento que dispara Three.js cuando está listo
document.dispatchEvent(new Event('threejsReady'));
