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



// FUNCION PARA MOSTRAR MENSAJE, EL SEGUNDO PARAMETRO ES EL ID


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


btnCrearPj.addEventListener('click', () => {
  inicializarPersonaje()

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
  // / / / / / /
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
}