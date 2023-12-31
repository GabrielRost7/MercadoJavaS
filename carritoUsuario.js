function mostrarCarritoEnHTML() {
    const carritoContainer = document.getElementById('carrito-container');
    const carritoHTML = [];

    carritoHTML.push('<h3>Carrito de Compras</h3>');

    carritoCompras.forEach(producto => {
        carritoHTML.push(
            `<p>
                <span>${producto.cantidad > 1 ? `${producto.cantidad} ` : ''}${producto.marca} ${producto.tipo} $${producto.precio}</span>
                <button class="quitar-producto" onclick="quitarDelCarrito(${producto.id})">
                    Quitar
                </button>
            </p>`
        );
    });

    carritoHTML.push('<hr>');
    carritoHTML.push(`<p>Total: $${precioTotal}</p>`);

    
    if (carritoCompras.length > 0) {
        carritoHTML.push('<button class="comprar-btn" onclick="realizarCompra()">Comprar</button>');
    }

    carritoContainer.innerHTML = carritoHTML.join('');
}



function mostrarCarritoEnHTMLEnCompra(carrito, total) {
    const carritoContainer = document.getElementById('carrito-container-en-compra');
    const carritoHTML = [];

    carritoHTML.push('<h3>Carrito de Compras</h3>');

    carrito.forEach(producto => {
        carritoHTML.push(
            `<p>
                <span>${producto.cantidad > 1 ? `${producto.cantidad} ` : ''}${producto.marca} ${producto.tipo} $${producto.precio}</span>
            </p>`
        );
    });

    carritoHTML.push('<hr>');
    carritoHTML.push(`<p>Total: $${total}</p>`);

    carritoContainer.innerHTML = carritoHTML.join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // Otras operaciones
    mostrarCarritoEnHTMLEnCompra(carritoCompras, precioTotal);
});

