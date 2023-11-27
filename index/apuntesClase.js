/* const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    }
]
 */




//alert();

// Estructura de datos
// Base de datos para consultas (Podemos imagina)
//[{},{},{}]

//console.table(autos);

/* let marca = prompt("Ingresar marca");
let year = Number(prompt("Ingresar año"));
let minimo = Number(prompt("Ingresar minimo"));
let maximo = Number(prompt("Ingresar maximo"));
let puertas = Number(prompt("Ingresar puertas"));
let transmision = prompt("Ingresar transmision");
let color = prompt("Ingresar color");

function mostrarAutos(autos) { */
  //console.log(autos);
/*   autos.forEach((auto) =>
    console.log(
      auto.marca +
        " - " +
        auto.modelo +
        " - " +
        auto.year +
        " - " +
        auto.puertas +
        " Puertas - Transmision " +
        auto.transmision +
        " - Precio " +
        auto.precio +
        " - Color " +
        auto.color
    )
  );
} */

// funcion madre de los filtros

/* function filtrarAutos() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  if (resultado.length > 0) {
    mostrarAutos(resultado);
  } else {
    alert("No hay esa marca en existencia"); */
/*   } */
  //const resultado = autos.filter( auto => mostrarAutos())
/* } */

// Declaramos los filtros 
/* 
function filtrarMarca(auto) {
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filtrarTransmision(auto) {
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (color) {
    return auto.color === color;
  }
  return auto;
}

filtrarAutos();
const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    }
]

 */

//alert()
/* 

let arr = []; // array vacio

console.log(arr)
console.log(typeof arr); // object

const numeros = [100, 250, 500, 677, 1000];

const booleanos = [true, false, false, true];
const mixtos = [100, "Lucas", true, numeros, {id:1, nombe:"TV", precio: 250000}]

let nombre1 = "Miqueas";
let nombre2 = "German";
let nombre3 = "Agustin";
let nombre4 = "Javier";

const cadenas = ["Miqueas", "German", "Agustin", "Javier"];

console.log(nombre1)
console.log(cadenas[0])
console.log(cadenas[1])
console.log(cadenas[2])

//alert(cadenas)
//document.write(cadenas)

let concatenamos = cadenas[2] + " tiene " + numeros[4] + " dolares";
console.log(concatenamos);
 */

// diferencia entre un array y un objeto

// obj: un conjunto de datos pertenecientes a una entidad
// arr: conjunto de datos de diferentes entidades (lista)

// --------------------------------------------------------------------
/* 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']; */

/* let usr2 = {
    id:1,
    nombre: 'adrgon',
    psw: 1234
}

let usr1 = {
    id:1,
    nombre: 'javi',
    psw: 5757
}

const usuarios = [usr1, usr2] */
/* 
for(let i=0; i<7; i+=1){
    console.log(dias[i])
    document.write('<p>' + dias[i] + '</p>')
} */

//const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
//console.log(ensalada[0])

// --------------------------------------------------------------------------------
// clase 7 //
// Estructura de datos // 
// Como una base de datos para consultas //
// [{}, {}, {}] // 
/////////////////



//alert();

// Estructura de datos
// Base de datos para consultas (Podemos imagina)
//[{},{},{}]

//console.table(autos);

/* let marca = prompt("Ingresar marca");
let year = Number(prompt("Ingresar año"));
let minimo = Number(prompt("Ingresar minimo"));
let maximo = Number(prompt("Ingresar maximo"));
let puertas = Number(prompt("Ingresar puertas"));
let transmision = prompt("Ingresar transmision");
let color = prompt("Ingresar color");

function mostrarAutos(autos) { */
  //console.log(autos);
/*   autos.forEach((auto) =>
    console.log(
      auto.marca +
        " - " +
        auto.modelo +
        " - " +
        auto.year +
        " - " +
        auto.puertas +
        " Puertas - Transmision " +
        auto.transmision +
        " - Precio " +
        auto.precio +
        " - Color " +
        auto.color
    )
  );
}

function filtrarAutos() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  if (resultado.length > 0) {
    mostrarAutos(resultado);
  } else {
    alert("No hay esa marca en existencia");
  }
  //const resultado = autos.filter( auto => mostrarAutos())
}

function filtrarMarca(auto) {
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}Ω

function filtrarTransmision(auto) {
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (color) {
    return auto.color === color;
  }
  return auto;
}

filtrarAutos();
 */




// -----------------------

/* let resultado;

console.log(Math);

resultado = Math.PI;
resultado = Math.E;

resultado = Math.round(2.3);
resultado = Math.round(2.5);
resultado = Math.round(2.7);

resultado = Math.ceil(2.000002);
resultado = Math.ceil(2.99999);

resultado = Math.floor(2.00002);
resultado = Math.floor(2.99999);
resultado = parseInt(2.999999);

resultado = Math.sqrt(144);
resultado = Math.abs(-144);

resultado = Math.pow(8, 3);
resultado = 8 ** 3;

resultado = Math.min(3, 5, 7, 1, 2, 10, 99, 0);

/* let arr = [10, 5, 8, 22, 31];
resultado = Math.min(arr); */

/* resultado = Math.max(3, 5, 7, 1, 2, 10, 99, 0);
resultado = Math.random();

resultado = Math.floor(Math.random() * 100);

resultado = Math.floor(Math.random() * 2);

if (resultado === 0) {
  document.write(
    "<img src='https://i.ebayimg.com/images/g/Jk8AAOSwq3JkEatg/s-l1600.jpg' width='100' />"
  );
} else {
  document.write(
    "<img src='https://i.ebayimg.com/images/g/BhIAAOSwX0hjEH2E/s-l1600.png' width='100' />"
  );
}

console.log(resultado); */



//  -------------------------------

/* console.log(new Date());

console.log(new Date(2026, 6, 15));
console.log(new Date(2024, 11, 25));

let fechaActual = new Date();

console.log(fechaActual.getDay());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());

const miCumple = new Date(1976, 0, 14);
console.log(miCumple);
const hoy = new Date();

console.log(hoy - miCumple);

const milxdia = 86400000;

console.log((hoy - miCumple) / milxdia);

 */

////////////////////////////////// 
////// // // /
// CLASE DOM
///////////// /

// Carrusel tengo que hacer manipulacion de nodos

// Evaluar si es necesario o no cambiar un texto
//document.querySelector("h1").textContent = "Titulo de mi pagina";

//window.alert()
//alert();
/* 
let elemento;
elemento = document; */
//console.log(document);
//console.log(elemento);

/* elemento = document.all;
elemento = document.all[0];
elemento = document.all[1];
elemento = document.all[2];

elemento = document.body;
elemento = document.head;
elemento = document.domain;
elemento = document.URL;

elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0][0];

console.log(elemento);
 */


