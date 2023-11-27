// ORDENANDO EL CODIGO //
// Por lo pronto, quiero declarar las variables globales que serán una 
// mousquherramienta misteriosa la cual nos ayudara mas adelante.

let btnCrearPj = document.getElementById('crearPersonaje')
let botonElegirRaza = document.getElementById('elegirRaza')
let titulo = document.getElementsByTagName('h1')[0]
let inputName = document.getElementById('inputName')
let startGame = document.getElementById('start')
let inputRaza = document.getElementById('classForm')
let razaSelector = document.getElementById('razaSelector')
let continuarJuego = document.getElementById('continuarJuego')


/// ocultando los botones que no usaremos por ahora

botonElegirRaza.style.display = 'none'
btnCrearPj.style.display = 'none'
titulo.style.display = 'none'
inputName.style.display = 'none'

// DECLARO AL PERSONAJE CON OBJETOS

let personaje = {
    nombre: '',
    raza: {},
    objeto: {}
  }

