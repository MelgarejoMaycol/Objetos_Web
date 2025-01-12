// Datos de ejemplo para los productos
const products = [
    { id: 1, idObjeto: "containerProcesador", name: "Procesador Intel i7", price: 300, image: "img/procesador.png", description: "Procesador de alta gama para un rendimiento excepcional." },
    { id: 2, idObjeto: "containerRam", name: "Tarjeta RAM 16GB", price: 80, image: "img/ram.png", description: "Memoria RAM de 16GB para multitarea fluida." },
    { id: 3, idObjeto: "containerFuente", name: "Fuente de Alimentación 750W", price: 100, image: "img/FuenteAlimentacion.png", description: "Fuente de alimentación potente y eficiente." },
    { id: 4, idObjeto: "containerDiscoD", name: "Disco Duro SSD 1TB", price: 150, image: "img/discoD.png", description: "Almacenamiento rápido y confiable de 1TB." },
    { id: 5, idObjeto: "containerGrafica", name: "Tarjeta Gráfica RTX 3060", price: 400, image: "img/grafica.png", description: "Tarjeta gráfica de última generación para juegos y diseño." }
];

let cart = [];

// Función para cargar los productos en el menú
function loadProducts() {
    const productMenu = document.getElementById('product-menu');
    productMenu.innerHTML = products.map(product => `
        <div class="product-item">
            <div id="${product.idObjeto}" class="objeto"></div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <div>
                <button onclick="addToCart(${product.id})" class="boton">Añadir al Carrito</button>
            </div>
        </div>
    `).join('');
}

// Funcionalidad del carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="boton" onclick="removeFromCart(${item.id})">X</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
    }
}

// Toggle del carrito desplegable
document.getElementById('cart-icon').addEventListener('click', () => {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('checkout').addEventListener('click', () => {
    alert(`Pedido realizado por un total de $${document.getElementById('cart-total').textContent}`);
    cart = [];
    updateCartDisplay();
    document.getElementById('cart-dropdown').style.display = 'none';
});

// Cargar los productos al iniciar la página
loadProducts();
