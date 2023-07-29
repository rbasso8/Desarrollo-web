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
/*
alert("Bienvenido a Cerveceria STOUT");

/*FUNCIONES

function cervezas(){
    numero= parseInt(prompt ("Ingresa un número para elegir su producto\n 1-Cerveza Lager rubia\n 2-Cerveza Porter negra\n 3-Cerveza Red ale \n 4-Cerveza Stout negra\n 5-Cerveza blonde wheat\n 6-Salir" ));
}
/*SELECCION PANTALLA PRINCIPAL*/
/*
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
/*
    /*METODO DE BUSQUEDA ARRAY
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
    /*ERROR INGRESO TIPO STRING
while(isNaN(numero)){
    alert("Error, ingrese un valor númerico.")
    cervezas();
}

/*SELECCION PANTALLA ERROR AL INGRESAR UN NÚMERO MENOR A 1 Y MAYOR A 6
    if(numero<=0 || numero >=7){
    alert("Ingrese un número correctamente")
    cervezas();
}


/*------------------------------------------------------------------------*/

/*INICIO DOM*/
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

