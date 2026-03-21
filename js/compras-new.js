/* ====================================================
   COMPU3D EXPLORER - SISTEMA DE CARRITO
   Funcionalidad de compra con catálogo de productos
   ==================================================== */

// ========== CATÁLOGO DE PRODUCTOS ==========
/**
 * Array con todos los productos disponibles
 * Cada producto tiene:
 * - id: identificador único
 * - idObjeto: ID del contenedor Three.js donde se muestra el modelo 3D
 * - name: nombre del producto
 * - price: precio en dólares
 * - image: ruta de la imagen PNG de referencia
 * - description: descripción del producto
 */
const products = [
    {
        id: 1,
        idObjeto: "containerProcesador",
        name: "Procesador Intel i7",
        price: 300,
        image: "/img/procesador.png",
        description: "Procesador de alta gama para un rendimiento excepcional."
    },
    {
        id: 2,
        idObjeto: "containerRam",
        name: "Tarjeta RAM 16GB",
        price: 80,
        image: "/img/ram.png",
        description: "Memoria RAM de 16GB para multitarea fluida."
    },
    {
        id: 3,
        idObjeto: "containerFuente",
        name: "Fuente de Alimentación 750W",
        price: 100,
        image: "/img/FuenteAlimentacion.png",
        description: "Fuente de alimentación potente y eficiente."
    },
    {
        id: 4,
        idObjeto: "containerDiscoD",
        name: "Disco Duro SSD 1TB",
        price: 150,
        image: "/img/discoD.png",
        description: "Almacenamiento rápido y confiable de 1TB."
    },
    {
        id: 5,
        idObjeto: "containerGrafica",
        name: "Tarjeta Gráfica RTX 3060",
        price: 400,
        image: "/img/grafica.png",
        description: "Tarjeta gráfica de última generación para juegos y diseño."
    }
];

// ========== CARRITO DE COMPRAS ==========
/**
 * Array que almacena los productos agregados al carrito
 * Se inicializa vacío y se llena cuando el usuario agrega productos
 */
let cart = [];

// ========== FUNCIONES DEL CARRITO ==========

/**
 * loadProducts()
 * Carga dinámicamente todos los productos en el menú
 * Crea una tarjeta HTML para cada producto con imagen, descripción y botón
 */
function loadProducts() {
    // Obtener el elemento contenedor donde se mostrarán los productos
    const productMenu = document.getElementById('product-menu');

    // Si no existe el contenedor, no hacer nada (ej: en index.html)
    if (!productMenu) return;

    // Generar HTML para cada producto
    productMenu.innerHTML = products.map(product => `
        <div class="product-item">
            <!-- Contenedor para el modelo 3D -->
            <div id="${product.idObjeto}" class="objeto"></div>

            <!-- Información del producto -->
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Precio: $${product.price}</strong></p>

            <!-- Botón para agregar al carrito -->
            <div>
                <button onclick="addToCart(${product.id})" class="boton">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `).join(''); // Usar join para convertir array a string HTML
}

/**
 * addToCart(productId)
 * Agrega un producto al carrito
 * Si ya existe en el carrito, incrementa la cantidad
 * @param {number} productId - ID del producto a agregar
 */
function addToCart(productId) {
    // Buscar el producto en el catálogo
    const product = products.find(p => p.id === productId);

    // Buscar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Si ya existe, aumentar cantidad
        existingItem.quantity++;
    } else {
        // Si no existe, agregarlo al carrito con cantidad 1
        cart.push({ ...product, quantity: 1 });
    }

    // Actualizar la visualización del carrito
    updateCartDisplay();

    // Feedback visual al usuario
    console.log(`Producto "${product.name}" agregado al carrito`);
}

/**
 * updateCartDisplay()
 * Actualiza la visualización del carrito con los items actuales
 * Recalcula el total y la cantidad de items
 */
function updateCartDisplay() {
    // Obtener elementos del DOM
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    // Generar HTML con cada item del carrito
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <!-- Nombre y cantidad del item -->
            <span>${item.name} x ${item.quantity}</span>

            <!-- Subtotal del item -->
            <span>$${(item.price * item.quantity).toFixed(2)}</span>

            <!-- Botón para eliminar del carrito -->
            <button class="boton" onclick="removeFromCart(${item.id})">X</button>
        </div>
    `).join('');

    // Calcular el total: sumar (precio x cantidad) de todos los items
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2); // Mostrar con 2 decimales

    // Calcular cantidad total de items: sumar todas las cantidades
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

/**
 * removeFromCart(productId)
 * Elimina un producto del carrito o reduce su cantidad
 * Si la cantidad es > 1, solo reduce en 1
 * Si la cantidad es 1, lo elimina completamente
 * @param {number} productId - ID del producto a eliminar/reducir
 */
function removeFromCart(productId) {
    // Encontrar el índice del item en el carrito
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        // Si el item existe
        if (cart[index].quantity > 1) {
            // Reducir cantidad en 1
            cart[index].quantity--;
        } else {
            // Eliminarlo completamente si la cantidad es 1
            cart.splice(index, 1);
        }

        // Actualizar visualización
        updateCartDisplay();

        console.log(`Producto reducido/eliminado del carrito`);
    }
}

// ========== EVENTOS DE INTERFAZ ==========

/**
 * Event Listener: Click en el icono del carrito
 * Alterna entre mostrar/ocultar el dropdown del carrito
 */
if (document.getElementById('cart-icon')) {
    document.getElementById('cart-icon').addEventListener('click', () => {
        const cartDropdown = document.getElementById('cart-dropdown');

        // Toggle: mostrar si está oculto, ocultar si está mostrado
        if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
            cartDropdown.style.display = 'block';
        } else {
            cartDropdown.style.display = 'none';
        }
    });
}

/**
 * Event Listener: Click en el botón de Checkout
 * Realiza la compra y limpia el carrito
 */
if (document.getElementById('checkout')) {
    document.getElementById('checkout').addEventListener('click', () => {
        // Verificar que haya items en el carrito
        if (cart.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        // Mostrar resumen de compra
        const total = document.getElementById('cart-total').textContent;
        alert(`¡Pedido realizado con éxito!\n\nTotal: $${total}\n\nGracias por tu compra.`);

        // Limpiar el carrito
        cart = [];

        // Actualizar visualización
        updateCartDisplay();

        // Ocultar el dropdown del carrito
        document.getElementById('cart-dropdown').style.display = 'none';

        console.log('Compra completada. Carrito limpiado.');
    });
}

// ========== INICIALIZACIÓN ==========

/**
 * Esperar a que Three.js esté listo y luego cargar los productos
 * Esto asegura que los contenedores del modelo 3D estén disponibles
 */
document.addEventListener('threejsReady', () => {
    loadProducts();
    console.log('Productos cargados exitosamente');
});

/**
 * También cargar productos si estamos en la página index.html
 * donde no hay contenedores de Three.js
 */
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que todo esté listo
    setTimeout(() => {
        // Si no se ha disparado threejsReady, cargar de todos modos
        if (document.getElementById('product-menu') && cart.length === 0) {
            loadProducts();
        }
    }, 500);
});
