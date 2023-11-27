

//  IMPORTANDO MODULOS // 
import { 
  botonElegirRaza,
  btnCrearPj,
  continuarJuego,
  inputName,
  inputRaza,
  razaSelector,
  startGame,

  titulo
} from "./_declaraciones.js";

import {
    razas
} from "./_ddbb.js";

import  {
  mostrarTablaRaza,
  mostrarMensaje,
  inicializarPersonaje
} from './_funciones.js'
 

let personaje = {
  nombre: "",
  raza: {},
  objeto: {}
};

///////////////////////////
////// START SECTION //////
///////////////////////////

startGame.addEventListener("click", () => {
// volvemos a mostrar lo necesario para el inicio y el ocultamos el boton de start
  startGame.style.display = "none";
  titulo.style.display = "inline";
  inputName.style.display = "flex";
  btnCrearPj.style.display = "inline";
  ocultar.style.display = "inline";
});











continuarJuego.addEventListener('click', ()=> {
mostrarMensaje(-'Hola','output')
outputDiv = document.getElementById('output2');
outputDiv.style.display = 'none'
titulo.innerHTML = 'Despertaste'
  mostrarMensaje(`¡Hola ${personaje.nombre}!. Menos mal despertaste.Mi nombre es Fulanito y te he estado cuidando. Que bien que despertaste! En serio, necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`, 'output')

  // cuando volvemos a tocar ocultamos el botón, y abrimos el menu desplegable. 
  continuarJuego.addEventListener('click', ()=>{ 
    mostrarMensaje(`...necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`, 'output')
    let choises = document.getElementById('choises__div')
    choises.style.display = 'flex';
    mostrarMensaje('Opción 1','ch1') // OP 1
    mostrarMensaje('Opción 2','ch2') // OP 2
    mostrarMensaje('Opción 3','ch3') // OP 3
    mostrarMensaje('Opción 4','ch4') // OP 4
  })
})

