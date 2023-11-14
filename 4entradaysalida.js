//VARIABLES-------------------------------------------//
let nombre_usuario;
let apellido_usuario;
let edad_usuario;
let botellas_cantidad;
let precio_total;
let precio_vodka_descuento;
let stock_vodka=200
//CONSTANTES------------------------------------------//
const valor1=1;
const mayor_edad=18;
const precio_vodka=2450;
//CÓDIGO----------------------------------------------//
do {
    nombre_usuario = prompt("Ingrese su nombre: ");
    if (nombre_usuario === "") {
        alert("Ingrese un nombre de usuario válido!")
    }
} while (nombre_usuario === "");

do {
    apellido_usuario = prompt("Ingrese su apellido: ");
    if (apellido_usuario === "") {
        alert("Ingrese un apellido válido!")
    }
} while (apellido_usuario === "");

do {
    edad_usuario = parseInt(prompt("Ingrese su edad: "));
    if (edad_usuario <= 0 || edad_usuario > 99 || isNaN(edad_usuario)) {
        alert("Ingrese una edad válida");
    }
} while (edad_usuario <= 0 || edad_usuario > 99 || isNaN(edad_usuario))


    if (edad_usuario < mayor_edad) {
        alert("Usted es menor de edad, no puede ingresar a la página!");
    } 
    else {
        do {
            botellas_cantidad = parseInt(prompt("Hola, " + nombre_usuario + " " + apellido_usuario + ", el precio de la botella de vodka es $2450, cuantas botellas desea comprar? \nSi compra más de 50 obtiene un 10% de descuento"));
            //SI LA CANTIDAD DE BOTELLAS ES MENOR O IGUAL A 0//
            if(botellas_cantidad<=0){
                alert("La compra no se puede realizar si la cantidad de botellas es menor o igual a 0!");            
            }
            //SI LA CANTIDAD DE BOTELLAS ES MAYOR AL STOCK
            else if (botellas_cantidad>stock_vodka){
                    alert("No contamos con suficiente stock, la compra máxima no debe superar las " + stock_vodka + " botellas");                
            }
            //SI LA CANTIDAD DE BOTELLAS ES NULA//
            else if(isNaN(botellas_cantidad)){
                alert("Por favor ingrese un número válido!")
            }
        }
        //HACER EL BUCLE SI BOTELLAS ES MENOR A 0, MAYOR A 200 O NULA// 
        while (botellas_cantidad <= 0 || botellas_cantidad>200 || isNaN(botellas_cantidad)) {
        }
        //SI EL BUCLE TERMINÓ CALCULAR SI APLICA EL DESCUENTO    
        if (botellas_cantidad >= 50) {
            //SE CALCULA DESCUENTO DEL 10% PARA DECIR CUANTO AHORRÓ//    
            precio_vodka_descuento = (botellas_cantidad * precio_vodka * 0.1);
            //PRECIO FINAL DEL PRODUCTO, CON EL DESCUENTO//               
            precio_total = (botellas_cantidad * precio_vodka * 0.9);
            alert("El precio total es de $" + precio_total + " ARS \nUsted obtuvo un descuento de $" + precio_vodka_descuento + " ARS");            
        }
        else {
            //SI COMPRA MENOS DE 50U, NO HAY DESCUENTO//
            precio_total = (botellas_cantidad * precio_vodka);
            alert("El precio total es de $" + precio_total + " ARS");
        }        
    }