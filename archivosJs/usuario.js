
function loginUsuario() {
    let usuarioInput = document.getElementById('usuarioNombre');
    let contraseñaInput = document.getElementById('contraseñaUsuario');   
    if (usuarioInput.value.trim() !== '' && contraseñaInput.value.trim() !== '') {
        accederPermiso = true;
        sessionStorage.setItem('accederPermiso', 'true');
        console.log("usuario y contraseña válidos");
        const tarjetaUsuarioAcceso = document.getElementById('tarjetaUsuarioAcceso');
        if (tarjetaUsuarioAcceso) {
            tarjetaUsuarioAcceso.style.display = 'none';
        }
    } else {
        console.log("usuario y/o contraseña inválidos");
        Swal.fire({
            title: "Debe ingresar un usuario y contraseña válidos!",
            icon: 'warning',
            showConfirmButton: true,      
            confirmButtonText: 'Reintentar',
            position: 'center',
        }).then((result) => {
            if (result.isDismissed) {
                window.location.href = '../index.html';
            }
        });
        event.preventDefault();
    }  
}