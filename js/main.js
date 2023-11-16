// let personaje = []

// en vez de hacer que el personaje sea un array, voy a hacer que sea un objeto
//que contenga información sobre el personaje, incluido el nombre, la raza y los atributos:

let personaje = {
  nombre: "",
  sexo: "",
  raza: {}
};

// y en vez hacer un push al array personaje, voy a crear una función que asigne de alguna manera
// el nombre, la raza y los atributos al objeto de personaje

function inicializarPersonaje() {
  personaje.nombre = inputName.value
  }


// definimos el array de razas que existen en nuestro mundo
// Se seguira manteniendo este array con objetos y propiedades de raza

const razas = [
  {
    nombre: "Humano",
    origen: "MarieJoise",
    habEspecial: "Tecnología",

    // Atributos de Raza//

    Str: 5, //Fuerza
    Int: 8, //Inteligencia
    Skill: 5, // Destreza
    Agli: 5, // Agilidad
    Stealth: 5 // Sigilo
  },
  {
    nombre: "Ogro",
    origen: "Montañas",
    habEspecial: "Fuerza Bruta",

    // Atributos de Raza //
    Str: 8,
    Int: 3,
    Skill: 4,
    Agli: 2,
    Stealth: 2
  },
  {
    nombre: "Elfo",
    origen: "Bosques",
    habEspecial: "Arquería",

    // Atributos de Raza//
    Str: 2, //Fuerza
    Int: 5, //Inteligencia
    Skill: 8, // Destreza
    Agi: 7, // Agilidad
    Stealth: 6 // Sigilo
  },
  {
    nombre: "Alto Elfo",
    origen: "Bosques",
    habEspecial: "Magia",

    // Atributos de raza //
    Str: 2, //Fuerza
    Int: 8, //Inteligencia
    Skill: 6, //Destreza
    Agi: 6, //Agilidad
    Stealth: 5 //Sigilo
  },
  {
    nombre: "Elfo Oscuro",
    origen: "Bosques",
    habEspecial: "Fuerza Bruta",

    // Atributos de raza //
    Str: 8, //Fuerza
    Int: 5, //Inteligencia
    Skill: 5, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5 //Sigilo
  },
  {
    nombre: "Demonio",
    origen: "Inferno",
    habEspecial: "Energia oscura",

    // Atributos de raza //
    Str: 6, //Fuerza
    Int: 6, //Inteligencia
    Skill: 5, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5 //Sigilo
  },
  {
    nombre: "Celestial",
    origen: "Olimpo",
    habEspecial: "Revivir",

    // Atributos de raza //
    Str: 4, //Fuerza
    Int: 8, //Inteligencia
    Skill: 6, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5 //Sigilo
  }
];
/// Elegiremos una raza para nuestro personaje ///

// todo el codigo que use anteriormente, lo voy a dejar en un JS llamado elegirRazaViejo
// ya que encontré una manera para optimizar la eleccion de raza y no quiero perder el
// primer intento intuitivo

function elegirRaza() {
  let razaIndex = prompt(
    "Elegí una raza para tu personaje...\n1-Humano\n2-Ogro\n3-Elfo\n4-Alto Elfo\n5-Elfo oscuro\n6-Demonio\n7-Celestial\n\n0 para más información sobre las razas"
  );
  // si razaIndex es mayor que 1 y menos que el numero de objetos que tenemos en el array
  if (razaIndex >= 1 && razaIndex <= razas.length) {
    // personaje.raza = "" ahora es igual a razaIndex - 1, porque el array comienza en 0
    personaje.raza = razas[razaIndex - 1];

    console.log(
      "La raza de " + personaje.nombre + " es: " + personaje.raza.nombre
    );
    console.log("Información de personaje:");

    console.table(personaje);
    console.log("Información de raza:");
    console.table(personaje.raza);
    // Si el usuario ingresa 0, se muestra información sobre todas las razas
  } else if (razaIndex == 0) {
    console.log("Acá tenes información sobre la estadistica de cada raza:");
    console.table(razas);
  } else {
    alert("Ingresa una opción válida");
  }
}
// funcion para mostrar una raza en una tabla html 

/// Comienzo del juego incoportando eventos y manipulando el DOM ///

// DEFINO Y TRAIGO LOS OBJETOS DEL DOM A MANIPULAR 

let btnCrearPj = document.getElementById('crearPersonaje');
let botonElegirRaza = document.getElementById('elegirRaza');
let ocultar = document.getElementById('infoStart');
let titulo = document.getElementsByTagName('h1')[0];
let inputName = document.getElementById('inputName');
let startGame = document.getElementById('start');

/// ocultando los botones que no usaremos por ahora

botonElegirRaza.style.display = 'none';
btnCrearPj.style.display = 'none';
titulo.style.display = 'none';
ocultar.style.display = 'none';
inputName.style.display = 'none';

function mostrarTablaRaza(raza) {
  const tablaHTML = `
    <table class="text-center border="1">
      <tr>
        <th>Atributo</th>
        <th>Valor</th>
      </tr>
      <tr>
        <td>Nombre</td>
        <td>${raza.nombre}</td>
      </tr>
      <tr>
        <td>Origen</td>
        <td>${raza.origen}</td>
      </tr>
      <tr>
        <td>Habilidad Especial</td>
        <td>${raza.habEspecial}</td>
      </tr>
      <tr>
        <td>Fuerza</td>
        <td>${raza.Str}</td>
      </tr>
      <tr>
        <td>Inteligencia</td>
        <td>${raza.Int}</td>
      </tr>
      <tr>
        <td>Destreza</td>
        <td>${raza.Skill}</td>
      </tr>
      <tr>
        <td>Agilidad</td>
        <td>${raza.Agi}</td>
      </tr>
      <tr>
        <td>Sigilo</td>
        <td>${raza.Stealth}</td>
      </tr>
    </table>
  `;

  document.getElementById('output2').insertAdjacentHTML('beforeend', tablaHTML);
}
////// START SECTION //////
startGame.addEventListener('click', ()=> {
  // volvemos a mostrar lo necesario para el inicio y el ocultamos el boton de start
  startGame.style.display = 'none';
  titulo.style.display = 'inline';
  inputName.style.display = 'flex';
  btnCrearPj.style.display = 'inline';
  ocultar.style.display = 'inline';
})

// FUNCION PARA MOSTRAR MENSAJE, EL SEGUNDO PARAMETRO ES EL ID

function mostrarMensaje(mensaje, elementoId) {
  const outputDiv = document.getElementById(elementoId);
  outputDiv.innerHTML += `<p class="text-center bg-dark text-white mt-5">${mensaje}</p>`;
}


btnCrearPj.addEventListener('click', ()=>{
  inicializarPersonaje();
  // ocultamos el boton y el texto de inicio 
  startGame.style.display = 'none';
  inputName.style.display = 'none';
  btnCrearPj.style.display = 'none';
  ocultar.style.display = 'none';
  botonElegirRaza.style.display = 'inline';
  // modificamos el titutlo

  titulo.innerHTML = 'Elije una raza para tu personaje'

  mostrarMensaje('Hola ' + personaje.nombre + ', bienvenido a MarieJoise. Selecciona tu raza tocando el boton de abajo:', 'output')

})

botonElegirRaza.addEventListener('click', ()=> {
    elegirRaza();
    let continuarJuego = document.getElementById('continuarJuego');
    continuarJuego.style.display = 'inline'
    botonElegirRaza.style.display = 'none';
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Perfecto ${personaje.nombre}, entonces tu raza es ${personaje.raza.nombre}. <br\> Acá abajo tenes información sobre tu raza:`
    mostrarTablaRaza(personaje.raza);
})


////// continuar juego