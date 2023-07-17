let numero;
let eleccion=true;
let opciones;
let cantidad=[0,0,0,0,0];
const precio= [1500, 1650, 1550, 1600, 1700];
const variedad= ["Cerveza Lager 1lt", "Cerveza Porter Negra 1lt", "Cerveza Red Ale 1lt", "Cerveza Stout 1lt", "Cerveza Blonde Wheat 1lt"]
let cant= [0, 0, 0, 0,0]
let total=[0,0,0,0,0];
const saludo= {
    saludos: "Gracias por su compra, lo esperamos nuevamente",
    cerveza: "Cerveceria Artesanal - STOUT",
    lugar: "Villa María - Córdoba"

}

alert("Bienvenido a Cerveceria STOUT");

/*FUNCIONES*/

function cervezas(){
    numero= parseInt(prompt ("Ingresa un número para elegir su producto\n 1-Cerveza Lager rubia\n 2-Cerveza Porter negra\n 3-Cerveza Red ale \n 4-Cerveza Stout negra\n 5-Cerveza blonde wheat\n 6-Salir" ));
}
/*SELECCION PANTALLA PRINCIPAL*/
do{
    cervezas();

    switch(numero){
        case 1: cantidad[0]=parseInt(prompt("Usted eligio  " +variedad[0]+ " $1500" + "\nIngrese la cantidad:" ));
                while (isNaN(parseInt(cantidad[0]))) {
                    alert("No ingresaste un número");
                    cantidad[0] = prompt("Ingrese una cantidad nuevamente");
                  }
                  alert("Producto añadido al carrito")
            break;
        
        case 2: cantidad[1]=parseInt(prompt("Usted eligio  " +variedad[1]+ " $1650" + "\nIngrese la cantidad:" ));
                while (isNaN(parseInt(cantidad[0]))) {
                    alert("No ingresaste un número");
                    cantidad[0] = prompt("Ingrese una cantidad nuevamente");
                }
                    alert("Producto añadido al carrito")
            break;
                
        case 3: cantidad[2]=parseInt(prompt("Usted eligio  " +variedad[2]+ " $1550" + "\nIngrese la cantidad:" ));
                while (isNaN(parseInt(cantidad[0]))) {
                    alert("No ingresaste un número");
                    cantidad[0] = prompt("Ingrese una cantidad nuevamente");
                }
                    alert("Producto añadido al carrito")
            break;
        
            case 4: cantidad[3]=parseInt(prompt("Usted eligio  " +variedad[3]+ " $1600" + "\nIngrese la cantidad:" ));
                while (isNaN(parseInt(cantidad[0]))) {
                    alert("No ingresaste un número");
                    cantidad[0] = prompt("Ingrese una cantidad nuevamente");
                }
                    alert("Producto añadido al carrito")
            break;
        
            case 5:cantidad[4]=parseInt(prompt("Usted eligio  " +variedad[4]+ " $1700" + "\nIngrese la cantidad:" ));
            while (isNaN(parseInt(cantidad[0]))) {
                alert("No ingresaste un número");
                cantidad[0] = prompt("Ingrese una cantidad nuevamente");
            }
                alert("Producto añadido al carrito")
            break;
        case 6: alert(saludo.saludos + "\n" +saludo.cerveza + "\n"+saludo.lugar)
        break;
        default: alert("Ingrese un número correctamente")
    }
}while(numero!=6);
    /*METODO DE BUSQUEDA ARRAY*/
    if (cantidad[0]!=0)
    {
        total[0]= 1500 * cantidad[0]
        
    }
    if (cantidad[1]!=0)
    {
        total[1]=  1650 * cantidad[1]
        
    }
    if (cantidad[2]!=0)
    {
        total[2]=  1550 * cantidad[2]
    
    }
    if (cantidad[3]!=0)
    {
        total[3]=  1600 * cantidad[3]
    }
    if (cantidad[4]!=0)
    {
        total=  1500 * cantidad[4]
    }
    if (cantidad !=0){
        let final= total[0] + total[1] + total[2] + total [3] + total [4]
        alert("El total de su compra es: "+"$"+ final)
    }
    /*ERROR INGRESO TIPO STRING*/
while(isNaN(numero)){
    alert("Error, ingrese un valor númerico.")
    cervezas();
}

/*SELECCION PANTALLA ERROR AL INGRESAR UN NÚMERO MENOR A 1 Y MAYOR A 6*/
    if(numero<=0 || numero >=7){
    alert("Ingrese un número correctamente")
    cervezas();
}
/*SELECCION PANTALLA SECUNDARIA SEGUIR COMPRA*/

