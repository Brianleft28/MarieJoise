
// importando declaraciones 
import {
  botonElegirRaza,
  btnCrearPj,
  continuarJuego,
  inputName,
  inputRaza,
  razaSelector,
  startGame,
  titulo
} from "./app.js";


export function inicializarPersonaje() {
  const inputName = document.getElementById('inputName')
  if (inputName.value) {
    const nombre = inputName.value.trim()
    // Elimina espacios en blanco al principio y al final del nombre
    // Verifica la longitud del nombre
    if (nombre.length >= 3 && nombre.length <= 20) {
      personaje.nombre = nombre
      // ocultamos y mostramos
      startGame.style.display = 'none'
      inputName.style.display = 'none'
      btnCrearPj.style.display = 'none'
      btnCrearPj.style.display = 'none'
      ocultar.style.display = 'none'
      botonElegirRaza.style.display = 'inline'
      let formClass = document.getElementById('formClass')
      formClass.style.display = 'flex'
      // modificamos el titutlo
      titulo.innerHTML = 'Elije una raza para tu personaje'
      mostrarMensaje(
        `Nombre del personaje establecido como: ${personaje.nombre}`,
        'output'
      )
    } else {
      titulo.innerHTML = 'Elige un nombre'
      mostrarMensaje('El nombre debe tener entre 3 y 20 caracteres.', 'output')
      botonElegirRaza.style.display = 'none'
      btnCrearPj.style.display = 'inline'
      titulo.style.display = 'inline'
      ocultar.style.display = 'none'
      inputName.style.display = 'inline'
    }
  } else {
    titulo.innerHTML = 'Elige un nombre valido'
    mostrarMensaje('Por favor, ingrese un nombre válido.', 'output')
    botonElegirRaza.style.display = 'none'
    btnCrearPj.style.display = 'inline'
    titulo.style.display = 'inline'
    ocultar.style.display = 'none'
    inputName.style.display = 'inline'
  }
}

export function mostrarMensaje(mensaje, elementoId) {
  const outputDiv = document.getElementById(elementoId)
  outputDiv.innerHTML = `<p class="text-center bg-dark text-white mt-5">${mensaje}</p>`
}

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


continuarJuego.addEventListener('click', () => {
  outputDiv = document.getElementById('output2')
  outputDiv.style.display = 'none'
  titulo.innerHTML = 'Despertaste'
  mostrarMensaje(
    `¡Hola ${personaje.nombre}!. Menos mal despertaste.Mi nombre es Fulanito y te he estado cuidando. Que bien que despertaste! En serio, necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
    'output'
  )

  continuarJuego.addEventListener('click', () => {
    titulo.innerHTML = 'Cruzar el rio'
    mostrarMensaje(
      `...necesitamos cruzar ese rio y nada mejor que un ${personaje.raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
      'output'
    )
    let choises = document.getElementById('choises__div')
    choises.style.display = 'flex'
    mostrarMensaje('Cruzar el rio solo', 'ch1') // OP 1
    mostrarMensaje('Cargar a cuestas y cruzar el rio', 'ch2') // OP 2
    mostrarMensaje('No cruzar el rio.', 'ch3') // OP 3
    mostrarMensaje('Preguntar que hay al otro lado del rio', 'ch4') // OP 4
  })
})

export function mostrarTablaRaza(raza) {
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
