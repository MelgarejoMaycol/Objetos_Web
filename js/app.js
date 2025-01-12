import * as THREE from 'http://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'http://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'http://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

// Configuración para el modelo (Ryzen4001.glb)
const camera1 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera1.position.set(0, 30, 0);

const scene1 = new THREE.Scene();
const backgroundTexture1 = new THREE.TextureLoader().load('../img/FondoObjetos.avif');
scene1.background = backgroundTexture1;

const ambientLight1 = new THREE.AmbientLight(0xffffff, 1);
scene1.add(ambientLight1);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight1.position.set(10, 10, 10);
scene1.add(directionalLight1);

let procesador;
const loader1 = new GLTFLoader();
loader1.load('../objetos/Ryzen4001.glb', function (gltf) {
    procesador = gltf.scene;

    procesador.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material.alphaTest = 0.5;
            child.material.side = THREE.DoubleSide;
        }
    });

    // Ajustar la posición, escala y rotación
    procesador.position.set(0, 0, 0); // Centrar
    procesador.scale.set(6, 6, 6); // Ajustar escala
    procesador.rotation.set(5, 1, 1); // No rotar

    scene1.add(procesador);
    console.log("Modelo Ryzen4001 cargado correctamente");
});

const renderer1 = new THREE.WebGLRenderer({ alpha: true });
renderer1.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('containerProcesador').appendChild(renderer1.domElement);

const controls1 = new OrbitControls(camera1, renderer1.domElement);
controls1.target.set(0, 4, 0);
controls1.update();

const reRender3D1 = () => {
    requestAnimationFrame(reRender3D1);
    controls1.update();
    renderer1.render(scene1, camera1);

    if (procesador) {
        procesador.rotation.y += 0.00;
    }
};
reRender3D1();

// Configuración para el modelo (Ram.glb)
const camera2 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera2.position.set(0, 6, 20);

const scene2 = new THREE.Scene();
const backgroundTexture2 = new THREE.TextureLoader().load('../img/FondoObjetos.avif');
scene2.background = backgroundTexture2;

const ambientLight2 = new THREE.AmbientLight(0xffffff, 1);
scene2.add(ambientLight2);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight2.position.set(10, 10, 10);
scene2.add(directionalLight2);

let ram;
const loader2 = new GLTFLoader();
loader2.load('../objetos/ram.glb', function (gltf) {
    ram = gltf.scene;

    ram.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material.alphaTest = 0.5;
            child.material.side = THREE.DoubleSide;
        }
    });

    // Ajustar la posición, escala y rotación
    ram.position.set(0, 0, 0); // Centrar
    ram.scale.set(0.7, 0.7, 0.7); // Ajustar escala
    ram.rotation.set(0, 2.4, 0); // No rotar

    scene2.add(ram);
    console.log("Modelo Ram cargado correctamente");
});

const renderer2 = new THREE.WebGLRenderer({ alpha: true });
renderer2.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('containerRam').appendChild(renderer2.domElement);

const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.target.set(0, 4, 0);
controls2.update();

const reRender3D2 = () => {
    requestAnimationFrame(reRender3D2);
    controls2.update();
    renderer2.render(scene2, camera2);

    if (ram) {
        ram.rotation.y += 0.00; // O puedes poner 0.00 si no quieres rotación
    }
};
reRender3D2();

// Configuración para el modelo (CorsairCV750.glb)
const camera3 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera3.position.set(0, 5, 20);

const scene3 = new THREE.Scene();
const backgroundTexture3 = new THREE.TextureLoader().load('../img/FondoObjetos.avif');
scene3.background = backgroundTexture3;

const ambientLight3 = new THREE.AmbientLight(0xffffff, 1);
scene3.add(ambientLight3);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight3.position.set(10, 10, 10);
scene3.add(directionalLight3);

let fuente;
const loader3 = new GLTFLoader();
loader3.load('../objetos/CorsairCV750.glb', function (gltf) {
    fuente = gltf.scene;

    fuente.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material.alphaTest = 0.5;
            child.material.side = THREE.DoubleSide;
        }
    });

    // Ajustar la posición, escala y rotación
    fuente.position.set(0, 2, 0); // Centrar
    fuente.scale.set(0.6, 0.6, 0.6); // Ajustar escala
    fuente.rotation.set(1, 0, 0); // No rotar

    scene3.add(fuente);
    console.log("Modelo CorsairCV750 cargado correctamente");
});

const renderer3 = new THREE.WebGLRenderer({ alpha: true });
renderer3.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('containerFuente').appendChild(renderer3.domElement);

const controls3 = new OrbitControls(camera3, renderer3.domElement);
controls3.target.set(0, 4, 0);
controls3.update();

const reRender3D3 = () => {
    requestAnimationFrame(reRender3D3);
    controls3.update();
    renderer3.render(scene3, camera3);

    if (fuente) {
        fuente.rotation.y += 0.00;
    }
};
reRender3D3();

// Configuración para el modelo (Almacenamiento1.glb)
const camera4 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera4.position.set(0, 5, 20);

const scene4 = new THREE.Scene();
const backgroundTexture4 = new THREE.TextureLoader().load('../img/FondoObjetos.avif');
scene4.background = backgroundTexture4;

const ambientLight4 = new THREE.AmbientLight(0xffffff, 1);
scene4.add(ambientLight4);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight4.position.set(10, 10, 10);
scene4.add(directionalLight4);

let almacenamiento;
const loader4 = new GLTFLoader();
loader4.load('../objetos/Almacenamiento1.glb', function (gltf) {
    almacenamiento = gltf.scene;

    almacenamiento.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material.alphaTest = 0.5;
            child.material.side = THREE.DoubleSide;
        }
    });

    // Ajustar la posición, escala y rotación
    almacenamiento.position.set(0, 0, -5); // Centrar
    almacenamiento.scale.set(0.5, 0.5, 0.5); // Ajustar escala
    almacenamiento.rotation.set(1, 0, 0); // No rotar

    scene4.add(almacenamiento);
    console.log("Modelo Almacenamiento1 cargado correctamente");
});

const renderer4 = new THREE.WebGLRenderer({ alpha: true });
renderer4.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('containerDiscoD').appendChild(renderer4.domElement);

const controls4 = new OrbitControls(camera4, renderer4.domElement);
controls4.target.set(0, 4, 0);
controls4.update();

const reRender3D4 = () => {
    requestAnimationFrame(reRender3D4);
    controls4.update();
    renderer4.render(scene4, camera4);

    if (almacenamiento) {
        almacenamiento.rotation.y += 0.00;
    }
};
reRender3D4();

// Configuración para el modelo (Grafica.glb)
const camera5 = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera5.position.set(0, 5, 20);

const scene5 = new THREE.Scene();
const backgroundTexture5 = new THREE.TextureLoader().load('../img/FondoObjetos.avif');
scene5.background = backgroundTexture5;

const ambientLight5 = new THREE.AmbientLight(0xffffff, 1);
scene5.add(ambientLight5);

const directionalLight5 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight5.position.set(10, 10, 10);
scene5.add(directionalLight5);

let grafica;
const loader5 = new GLTFLoader();

loader5.load('../objetos/Grafica.glb', function (gltf) {
    grafica = gltf.scene;

    grafica.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1.0;
            child.material.alphaTest = 0.5;
            child.material.side = THREE.DoubleSide;
        }
    });

    // Ajustar la posición, escala y rotación
    grafica.position.set(-5, 0, 0); // Centrar
    grafica.scale.set(0.2, 0.2, 0.2); // Ajustar escala
    grafica.rotation.set(0, 0, 0); // No rotar

    scene5.add(grafica);
    console.log("Modelo Grafica cargado correctamente");
});

const renderer5 = new THREE.WebGLRenderer({ alpha: true });
renderer5.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('containerGrafica').appendChild(renderer5.domElement);

const controls5 = new OrbitControls(camera5, renderer5.domElement);
controls5.target.set(0, 4, 0);
controls5.update();

const reRender3D5 = () => {
    requestAnimationFrame(reRender3D5);
    controls5.update();
    renderer5.render(scene5, camera5);

    if (grafica) {
        grafica.rotation.y += 0.00;
    }
}
reRender3D5();

// Ajuste de tamaño al redimensionar la ventana
window.addEventListener('resize', () => {
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth / 2, window.innerHeight);

    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth / 2, window.innerHeight);

    camera3.aspect = window.innerWidth / window.innerHeight;
    camera3.updateProjectionMatrix();
    renderer3.setSize(window.innerWidth / 2, window.innerHeight);

    camera4.aspect = window.innerWidth / window.innerHeight;
    camera4.updateProjectionMatrix();
    renderer4.setSize(window.innerWidth / 2, window.innerHeight);

    camera5.aspect = window.innerWidth / window.innerHeight;
    camera5.updateProjectionMatrix();
    renderer5.setSize(window.innerWidth / 2, window.innerHeight);
});
