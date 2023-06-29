let numero;
let eleccion;
let opciones;
const precio1= "$1500";
const precio2= "$1650";
const precio3= "$1550";
const precio4= "$1600";
const precio5= "$1700";
alert("Bienvenido a Cerveceria STOUT");

/*FUNCIONES*/
function cervezas(){
    numero= parseInt(prompt ("Ingresa un número para elegir su producto\n 1-Cerveza Lager rubia\n 2-Cerveza Porter negra\n 3-Cerveza Red ale \n 4-Cerveza Stout negra\n 5-Cerveza blonde wheat\n 6-Salir" ));
}
/*SELECCION PANTALLA PRINCIPAL*/
cervezas();
/*ERROR INGRESO TIPO STRING*/
while(isNaN(parseInt(numero))){
    alert("No ingresaste un número");
    cervezas();
}
/*SELECCION PANTALLA ERROR AL INGRESAR UN NÚMERO MENOR A 1 Y MAYOR A 6*/
if(numero<1 || numero>6){
    alert("Ingrese un número correctamente")
    cervezas();
}
/*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/
if(numero===1){
    eleccion=parseInt(prompt("Usted eligio Cerveza Lager rubia 1lt "+ precio1 + "\nDesea agregar otro producto al carrito? \n1-Si\n 2-No"));
}
    
    if (eleccion===1){
    cervezas();
    }

    /*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/
if(numero===2){
    eleccion=parseInt(prompt("Usted eligio Cerveza Porter Negra 1lt "+precio2+"\n Desea agregar otro producto al carrito? \n1-Si\n 2-No"))
}
    if (eleccion===1){
    cervezas();
    }


/*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/
if(numero===3){
    eleccion=parseInt(prompt("Usted eligio Cerveza Red ale 1lt "+precio3+"\n Desea agregar otro producto al carrito? \n1-Si\n 2-No"))
}

    if (eleccion===1){
    cervezas();
    }


/*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/
if(numero===4)
{
    eleccion=parseInt(prompt("Usted eligio Cerveza Stout negra 1lt "+precio4+"\n Desea agregar otro producto al carrito? \n1-Si\n 2-No"))
}
    if (eleccion===1){
    cervezas();
    }



/*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/
if(numero===5){
    eleccion=parseInt(prompt("Usted eligio Cerveza Blonde wheat 1lt "+precio5+"\n Desea agregar otro producto al carrito? \n1-Si\n 2-No"))
    if (eleccion===1){
        cervezas();
        }
}
/*ERROR ELECCION ERRONEA*/
if(eleccion<1 || eleccion>2){
    alert("Elija un número correctamente, actualice la página para volver a comprar")
}



