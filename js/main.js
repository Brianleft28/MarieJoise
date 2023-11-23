// let personaje = []

// en vez de hacer que el personaje sea un array, voy a hacer que sea un objeto
//que contenga información sobre el personaje, incluido el nombre, la raza y los atributos:

let personaje = {
  nombre: '',
  raza: {},
}

// y en vez hacer un push al array personaje, voy a crear una función que asigne de alguna manera
// el nombre, la raza y los atributos al objeto de personaje

function inicializarPersonaje() {
  const inputName = document.getElementById('inputName'); 
  if (inputName.value) {
      const nombre = inputName.value.trim(); // Elimina espacios en blanco al principio y al final del nombre

      // Verifica la longitud del nombre
      if (nombre.length >= 3 && nombre.length <= 20) {
          personaje.nombre = nombre;
          // ocultamos y mostramos 
          startGame.style.display = 'none'
          inputName.style.display = 'none'
          btnCrearPj.style.display = 'none'
          ocultar.style.display = 'none'
          botonElegirRaza.style.display = 'inline'
          let formClass = document.getElementById('formClass')
          formClass.style.display = 'flex'
          // modificamos el titutlo
          titulo.innerHTML = 'Elije una raza para tu personaje'
          mostrarMensaje(`Nombre del personaje establecido como: ${personaje.nombre}`, 'output');
          
      } else {
          titulo.innerHTML = 'Elige un nombre'
          mostrarMensaje('El nombre debe tener entre 3 y 20 caracteres.', 'output');
          botonElegirRaza.style.display = 'none'
          btnCrearPj.style.display = 'inline'
          titulo.style.display = 'inline'
          ocultar.style.display = 'none'
          inputName.style.display = 'inline'
      }
  } else {
      titulo.innerHTML = 'Elige un nombre valido'
      mostrarMensaje('Por favor, ingrese un nombre válido.', 'output');
      botonElegirRaza.style.display = 'none'
      btnCrearPj.style.display = 'inline'
      titulo.style.display = 'inline'
      ocultar.style.display = 'none'
      inputName.style.display = 'inline'
  }
}

// definimos el array de razas que existen en nuestro mundo
// Se seguira manteniendo este array con objetos y propiedades de raza

const razas = [
  {
    nombre: 'Humano',
    origen: 'MarieJoise',
    habEspecial: 'Tecnología',

    // Atributos de Raza//

    Str: 5, //Fuerza
    Int: 8, //Inteligencia
    Skill: 5, // Destreza
    Agi: 5, // Agilidad
    Stealth: 5, // Sigilo
  },
  {
    nombre: 'Ogro',
    origen: 'Montañas',
    habEspecial: 'Fuerza Bruta',

    // Atributos de Raza //
    Str: 8,
    Int: 3,
    Skill: 4,
    Agi: 2,
    Stealth: 2,
  },
  {
    nombre: 'Elfo',
    origen: 'Bosques',
    habEspecial: 'Arquería',

    // Atributos de Raza//
    Str: 2, //Fuerza
    Int: 5, //Inteligencia
    Skill: 8, // Destreza
    Agi: 7, // Agilidad
    Stealth: 6, // Sigilo
  },
  {
    nombre: 'Alto Elfo',
    origen: 'Bosques',
    habEspecial: 'Magia',

    // Atributos de raza //
    Str: 2, //Fuerza
    Int: 8, //Inteligencia
    Skill: 6, //Destreza
    Agi: 6, //Agilidad
    Stealth: 5, //Sigilo
  },
  {
    nombre: 'Elfo Oscuro',
    origen: 'Bosques',
    habEspecial: 'Fuerza Bruta',

    // Atributos de raza //
    Str: 8, //Fuerza
    Int: 5, //Inteligencia
    Skill: 5, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5, //Sigilo
  },
  {
    nombre: 'Demonio',
    origen: 'Inferno',
    habEspecial: 'Energia oscura',

    // Atributos de raza //
    Str: 6, //Fuerza
    Int: 6, //Inteligencia
    Skill: 5, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5, //Sigilo
  },
  {
    nombre: 'Celestial',
    origen: 'Olimpo',
    habEspecial: 'Revivir',

    // Atributos de raza //
    Str: 4, //Fuerza
    Int: 8, //Inteligencia
    Skill: 6, //Destreza
    Agi: 5, //Agilidad
    Stealth: 5, //Sigilo
  },
]
/// Elegiremos una raza para nuestro personaje ///

// todo el codigo que use anteriormente, lo voy a dejar en un JS llamado elegirRazaViejo
// ya que encontré una manera para optimizar la eleccion de raza y no quiero perder el
// primer intento intuitivo

// funcion para mostrar una raza en una tabla html

/// Comienzo del juego incoportando eventos y manipulando el DOM ///

// DEFINO Y TRAIGO LOS OBJETOS DEL DOM A MANIPULAR

let btnCrearPj = document.getElementById('crearPersonaje')
let botonElegirRaza = document.getElementById('elegirRaza')
let ocultar = document.getElementById('infoStart')
let titulo = document.getElementsByTagName('h1')[0]
let inputName = document.getElementById('inputName')
let startGame = document.getElementById('start')

/// ocultando los botones que no usaremos por ahora

botonElegirRaza.style.display = 'none'
btnCrearPj.style.display = 'none'
titulo.style.display = 'none'
ocultar.style.display = 'none'
inputName.style.display = 'none'

function mostrarTablaRaza(raza) {
  const tablaHTML = `
    <table class="text-center border="1">
      <tr style: margin 10px>
        <th>Atributo</th>
        <th>Valor</th>
      </tr>
      <tr>
        <td>Nombre: </td>
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
  `

  document.getElementById('output2').insertAdjacentHTML('beforeend', tablaHTML)
}

// FUNCION PARA MOSTRAR MENSAJE, EL SEGUNDO PARAMETRO ES EL ID

function mostrarMensaje(mensaje, elementoId) {
  const outputDiv = document.getElementById(elementoId)
  outputDiv.innerHTML = `<p class="text-center bg-dark text-white mt-5">${mensaje}</p>`
}

///////////////////////////
////// START SECTION //////
///////////////////////////

startGame.addEventListener('click', () => {
  // volvemos a mostrar lo necesario para el inicio y el ocultamos el boton de start
  startGame.style.display = 'none'
  titulo.style.display = 'inline'
  inputName.style.display = 'flex'
  btnCrearPj.style.display = 'inline'
  ocultar.style.display = 'inline'
})
let inputRaza = document.getElementById('classForm')
let razaSelector = document.getElementById('razaSelector')
 
function razaTime() {
  let razaIndex = razaSelector.value
  let razaElegida = razas[razaIndex - 1]
  personaje.raza = razaElegida;
  if (razaIndex == 0) {
    mostrarMensaje('<a target="blank_"href="razas.html">Aca </a>hay informacion sobre las razas disponibles:', 'output')
    let continuarJuego = getElementById('continuarJuego')
    let formClass = document.getElementById('formClass')
  } else if (razaIndex >= 0) {

    mostrarMensaje(`Entonces, la raza de $[personaje.nombre] es $[personaje.raza.nombre] \n a continuación la tabla de su raza:` ,'output')
}
}
//////// BOTON HACIA ELEGIR RAZA /////////////
btnCrearPj.addEventListener('click', () => {
  inicializarPersonaje()
  // ocultamos el boton y el texto de inici
})

//////// BOTON HACIA ELEGIR RAZA /////////////

botonElegirRaza.addEventListener('click', () => {
  razaTime()
  let continuarJuego = document.getElementById('continuarJuego')
  continuarJuego.style.display = 'inline'
  botonElegirRaza.style.display = 'none'
  formClass.style.display = 'none'
  let outputDiv = document.getElementById('output')
  outputDiv.innerHTML = `Perfecto ${personaje.nombre}, entonces tu raza es ${personaje.raza.nombre}. <br\> Acá abajo tenes información sobre tu raza:`
  mostrarTablaRaza(personaje.raza)
})  
//////////////////////////
///////////////////////////////
/////////////////////////////
////////////////////////////////////
      // CONTINUAR JUEGO //
//// comienza de la historia ////
  //        MOMENTO 1       //
/////////////////////////////
////////////////////////////////////
///////////////////////////////
//////////////////////////
//  HISTORIA #1
//////////////////////////
let continuarJuego = document.getElementById('continuarJuego')
continuarJuego.addEventListener('click', ()=> {
outputDiv = document.getElementById('output2');
outputDiv.style.display = 'none'
titulo.innerHTML = 'Despertaste'
  mostrarMensaje(`¡Hola ${personaje.nombre}!. Menos mal despertaste.Mi nombre es Fulanito y te he estado cuidando. Que bien que despertaste! En serio, necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`, 'output')

  /////////////////////////////////////////////////////////
  // cuando volvemos a tocar ocultamos el botón, y abrimos el menu desplegable. 
  // // // // // //
  ////////////////////////////////////////////////////////
  // HISTORIA #2
  //////////////
  continuarJuego.addEventListener('click', ()=>{ 
    titulo.innerHTML = 'Cruzar el rio'
    mostrarMensaje(`...necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`, 'output')
    let choises = document.getElementById('choises__div')
    choises.style.display = 'flex';
    mostrarMensaje('Cruzar el rio solo','ch1') // OP 1
    mostrarMensaje('Cargar a cuestas y cruzar el rio','ch2') // OP 2
    mostrarMensaje('No cruzar el rio.','ch3') // OP 3
    mostrarMensaje('Preguntar que hay al otro lado del rio','ch4') // OP 4
  })
})

//// 





////// continuar juego



/// continuar con el comienzo de la historia, diviendo 
// la resolución del problema en 4 caminos posibles, con 4 
// distintas historias

// tambien tengo pensado agregar un inventario para mi personaje

