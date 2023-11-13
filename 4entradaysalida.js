//VARIABLES-------------------------------------------//
let nombre_usuario;
let apellido_usuario;
let edad_usuario;
let botellas_cantidad;
let precio_total;
//CONSTANTES------------------------------------------//
const valor1=1;
const mayor_edad=18;
const precio_vodka=2450;
//CÓDIGO----------------------------------------------//
nombre_usuario=prompt("Ingrese su nombre: ");

apellido_usuario=prompt("Ingrese su apellido: ");

edad_usuario= parseInt(prompt("Ingrese su edad: "));

if (edad_usuario<=0 || edad_usuario>99){
    alert("Ingrese una edad válida");
} else{
    if (edad_usuario<mayor_edad){
        alert("Usted es menor de edad, no puede ingresar a la página!");
        } else{
        botellas_cantidad=parseInt(prompt("Hola, "+ nombre_usuario + " " + apellido_usuario+", el precio de la botella de vodka es $2450, cuantas botellas desea comprar?"));    
        precio_total=(botellas_cantidad*precio_vodka);
        alert("El precio total es de "+ precio_total);
        }        
}




