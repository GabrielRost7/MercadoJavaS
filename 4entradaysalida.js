
const productos = [
    /* ID 1-20 VODKA- 21-40 VINOS- 41-60 CERVEZA*/
    { id: 1, marca: 'Smirnoff', tipo: 'Común', precio: 600, },
    { id: 2, marca: 'Smirnoff', tipo: 'Raspberry', precio: 600 },
    { id: 3, marca: 'Smirnoff', tipo: 'Citrus', precio: 600 },

    { id: 4, marca: 'Absolut', tipo: 'Común', precio: 600 },
    { id: 5, marca: 'Absolut', tipo: 'Raspberry', precio: 600 },
    { id: 6, marca: 'Absolut', tipo: 'Pera', precio: 600 },

    { id: 7, marca: 'Skyy', tipo: 'Común', precio: 600 },
    { id: 8, marca: 'Skyy', tipo: 'Raspberry', precio: 600 },
    { id: 9, marca: 'Skyy', tipo: 'Maracuyá', precio: 600 },

    { id: 10, marca: 'New Style', tipo: 'Común', precio: 600 },
    { id: 11, marca: 'New Style', tipo: 'Raspberry', precio: 600 },
    { id: 12, marca: 'New Style', tipo: 'Citrus', precio: 600 },


    /*---------VINOS------*/

    { id: 21, marca: 'Dadá', tipo: 'Común', precio: 600 },
    { id: 22, marca: 'Dadá', tipo: 'Honey', precio: 600 },
    { id: 23, marca: 'Dadá', tipo: 'Negra', precio: 600 },

    { id: 24, marca: 'Álamos', tipo: 'Común', precio: 600 },
    { id: 25, marca: 'Álamos', tipo: 'Blanco', precio: 600 },
    { id: 26, marca: 'Álamos', tipo: 'Malbec', precio: 600 },

    { id: 27, marca: 'Portillo', tipo: 'Común', precio: 600 },
    { id: 28, marca: 'Portillo', tipo: 'Blanco', precio: 600 },
    { id: 29, marca: 'Portillo', tipo: 'Rosé', precio: 600 },


    /*--------CERVEZAS----------*/


    { id: 41, marca: 'Brahma', tipo: 'Chopp', precio: 600 },
    { id: 42, marca: 'Brahma', tipo: 'Dorada', precio: 600 },
    { id: 43, marca: 'Brahma', tipo: 'Malzbier', precio: 600 },

    { id: 44, marca: 'Patagonia', tipo: 'Large', precio: 600 },
    { id: 45, marca: 'Patagonia', tipo: 'Hoppy Larger', precio: 600 },
    { id: 46, marca: 'Patagonia', tipo: 'Sendero Sur', precio: 600 },


    { id: 47, marca: 'Quilmes', tipo: 'Común', precio: 600 },
    { id: 48, marca: 'Quilmes', tipo: 'Stout', precio: 600 },
    { id: 49, marca: 'Quilmes', tipo: '0 Alcohol', precio: 600 },


    { id: 50, marca: 'Andes', tipo: 'Rubia', precio: 600 },
    { id: 51, marca: 'Andes', tipo: 'Roja', precio: 600 },
    { id: 52, marca: 'Andes', tipo: 'Ipa', precio: 600 },


    { id: 53, marca: 'Imperial', tipo: 'Larger', precio: 600 },
    { id: 54, marca: 'Imperial', tipo: 'Golden', precio: 600 },
    { id: 55, marca: 'Imperial', tipo: 'Cream Stout', precio: 600 },
]

let carritoCompras = [];

let precioTotal = 0;

function agregarAlCarrito(productoId) {
    const productoSeleccionado = productos.find(producto => producto.id === productoId);
    const productoEnCarrito = carritoCompras.find(item => item.id === productoSeleccionado.id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        productoSeleccionado.cantidad = 1;
        carritoCompras.push(productoSeleccionado);
    }

    precioTotal += productoSeleccionado.precio;

    mostrarCarritoEnHTML();
    mostrarCarritoEnConsola();
}

function mostrarCarritoEnConsola() {
    console.log('Contenido del carrito:');
    carritoCompras.forEach(producto => {
        console.log(`${producto.cantidad > 1 ? `${producto.cantidad} ` : ''}${producto.marca} ${producto.tipo} $${producto.precio}`);
    });
    console.log('Precio total:', precioTotal);
}

function mostrarCarritoEnHTML() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '<h3>Carrito de Compras</h3>';
    carritoCompras.forEach(producto => {
        carritoContainer.innerHTML += `
            <p>
                ${producto.cantidad > 1 ? `${producto.cantidad} ` : ''}${producto.marca} ${producto.tipo} $${producto.precio}
            </p>
        `;
    });

    carritoContainer.innerHTML += `<hr>`;
    carritoContainer.innerHTML += `<p>Total: $${precioTotal}</p>`;
}

function agregarEventos() {
    for (let i = 0; i < productos.length; i++) {
        const productoId = productos[i].id;
        const botonProducto = document.getElementById(`producto-${productoId}`);

        if (botonProducto) {
            botonProducto.addEventListener('click', () => agregarAlCarrito(productoId));
        }
    }

    const carritoComprasBtn = document.querySelector('.carrito-compras a');
    carritoComprasBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        toggleCarrito();
    });
}

function toggleCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = (carritoContainer.style.display === 'none' || carritoContainer.style.display === '') ? 'block' : 'none';
}

agregarEventos();