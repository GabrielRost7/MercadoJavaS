
document.addEventListener('DOMContentLoaded', () => {
    const verificarCorreoBtn = document.getElementById('verificarCorreo');
    if (verificarCorreoBtn) {
        verificarCorreoBtn.addEventListener('click', () => verificarCorreo());
    }
});

async function verificarCorreo() {
    const correoInput = document.getElementById('correoelec');
    const correo = correoInput.value.trim();
    if (correo !== '') {
        const url = `https://mailcheck.p.rapidapi.com/?domain=${correo}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd3d839fd46msh10a9419068010d5p16e147jsnb0094832cba7',
                'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();        
            if (result.valid === false) {                
	            console.log(result);
                Swal.fire({
                    title: "La dirección de correo electrónico es incorrecta. Por favor, vuelve a intentar con otra.",
                    showConfirmButton: true,
                    confirmButtonText: 'Reintentar',
                    position: 'center',
                });
            } else {               
	            console.log(result);
                Swal.fire({
                    title: "Gracias por comprar, la factura llegará a su mail.",
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                    position: 'center',
                });
            }
        } catch (error) {
            console.error(error);
        }
    } else {       	    
        Swal.fire({
            title: "Por favor, ingrese un correo electrónico válido!",
            showConfirmButton: true,
            confirmButtonText: 'Reintentar',
            position: 'center',
        })
    }
}