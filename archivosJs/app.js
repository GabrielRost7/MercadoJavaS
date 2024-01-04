let carritoCompras = [];
let precioTotal = 0;
let accederPermiso = sessionStorage.getItem('accederPermiso') === 'true';

document.addEventListener('DOMContentLoaded', () => {
    bucleCarrito();
    displayCarrito();
    
    const carritoContainerEnCompra = document.getElementById('carrito-container-en-compra');
    if (carritoContainerEnCompra) {
        const comprarBtn = document.querySelector('.comprar-btn');
        if (comprarBtn) {
            comprarBtn.addEventListener('click', () => {
                realizarCompra();
            });
        }
    }
});

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

window.onload = () => {
    displayCarrito();
};

function quitarDelCarrito(productoId) {
    const productoEnCarrito = carritoCompras.find(item => item.id === productoId);
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad > 1) {
            
            productoEnCarrito.cantidad -= 1;
            precioTotal -= productoEnCarrito.precio;
        } else {           
            const index = carritoCompras.findIndex(item => item.id === productoId);
            if (index !== -1) {
                carritoCompras.splice(index, 1);
                precioTotal -= productoEnCarrito.precio;
            }
        }
        mostrarCarritoEnHTML();
        mostrarCarritoEnConsola();
    }
}

function mostrarCarritoEnConsola() {
    console.log('Contenido del carrito:');
    carritoCompras.forEach(producto => {
        console.log(`${producto.cantidad > 1 ? `${producto.cantidad} ` : ''}${producto.marca} ${producto.tipo} $${producto.precio}`);
    });
    console.log('Precio total:', precioTotal);
}

function bucleCarrito() {
    for (let i = 0; i < productos.length; i++) {
        const productoId = productos[i].id;
        const botonProducto = document.getElementById(`producto-${productoId}`);
        if (botonProducto) {
            botonProducto.addEventListener('click', () => agregarAlCarrito(productoId));
        }
    }
    const carritoComprasBtn = document.querySelector('.carrito-compras a');
    if (carritoComprasBtn) {
        carritoComprasBtn.addEventListener('click', (event) => {
            event.preventDefault();
            displayCarrito();
        });
    }
}

function displayCarrito() {
    const carritoContainer = document.getElementById('carrito-container');     
    if (carritoContainer) {
        if (carritoCompras.length > 0) {
            
            carritoContainer.style.display = (carritoContainer.style.display === 'none' || carritoContainer.style.display === '') ? 'block' : 'none' ;
            
            const comprarBtn = document.querySelector('.comprar-btn');
            if (comprarBtn) {
                comprarBtn.style.display = 'block';
                
            }
        } else {
            carritoContainer.style.display = 'none';
            Swal.fire({
                title: "Su carrito de compras está vacío",                
                showConfirmButton: true,                      
                confirmButtonText: 'Continuar',
                position: 'center',
            })
        }   
    }
}

function realizarCompra() {
    console.log(accederPermiso);   
    if(accederPermiso==true){         
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.style.display='none'; 
        Swal.fire({
            title: "Gracias por comprar en el Mercadito de Alcohol!",
            showCancelButton:true,
            showConfirmButton: true,
            cancelButtonText:'Cancelar',       
            confirmButtonText: 'Continuar con la compra',
            position: 'center',
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.setItem('carritoCompras', JSON.stringify(carritoCompras));
                sessionStorage.setItem('precioTotal', precioTotal);
                carritoCompras = [];
                precioTotal = 0;
                mostrarCarritoEnHTML();
                window.location.href = '../pages/compra.html';
            }
            if (result.isDismissed){
                Swal.fire({
                    title:"Su carrito de compras fue borrado!",
                    showConfirmButton:true,
                    confirmButtonText:'Continuar',                
                });
                carritoCompras=[];
                precioTotal=0;                
            }
        });
    }else{
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.style.display = 'none';
        Swal.fire({
            title: "Lo siento! Debes loguearte para realizar una compra. ¡En nuestra página principal puedes hacerlo!",
            showConfirmButton: true,
            confirmButtonText: 'Página principal',
            position: 'center',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html';
            }
        });
    }    
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const carritoData = params.get('carrito');
    const total = params.get('total');
    if (carritoData && total) {
        const carrito = JSON.parse(decodeURIComponent(carritoData));
    }
});