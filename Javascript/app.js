document.addEventListener("DOMContentLoaded", () => {
  // Cargar el nombre del personaje desde localStorage
  const nombreGuardado = localStorage.getItem("nombrePersonaje");
  if (nombreGuardado) {
    inputName.value = nombreGuardado;
  }
});

let botonElegirRaza = document.getElementById("elegirRaza");
let continuarJuego = document.getElementById("continuarJuego");
let inputName = document.getElementById("inputName");
let inputRaza = document.getElementById("classForm");
let razaSelector = document.getElementById("razaSelector");
let titulo = document.getElementsByTagName("h1")[0];
let btnCrearPj = document.getElementById("crearPersonaje");
let startGame = document.getElementById("start");

botonElegirRaza.style.display = "none";
btnCrearPj.style.display = "none";
titulo.style.display = "none";
inputName.style.display = "none";

// defino objeto personaje y array
let personaje = {
  nombre: "",
  raza: {},
  objeto: {}
};

// razas array
const razas = [
  {
    nombre: "Humano",
    origen: "MarieJoise",
    habEspecial: "Tecnología",

    // Atributos de Raza//

    Str: 5, //Fuerza
    Int: 8, //Inteligencia
    Skill: 5, // Destreza
    Agi: 5, // Agilidad
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
    Agi: 2,
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

// funciones

function inicializarPersonaje() {
  const inputName = document.getElementById("inputName");

  if (inputName.value) {
    const nombre = inputName.value.trim();

    if (nombre.length >= 3 && nombre.length <= 20) {
      // Guardar el nombre en localStorage

      localStorage.setItem("nombrePersonaje", nombre);
      personaje.nombre = nombre;
      startGame.style.display = "none";
      inputName.style.display = "none";
      btnCrearPj.style.display = "none";
      botonElegirRaza.style.display = "inline";
      let formClass = document.getElementById("formClass");
      formClass.style.display = "flex";
      titulo.innerHTML = "Elije una raza para tu personaje";

      mostrarMensaje(
        `Nombre del personaje establecido como: ${personaje.nombre}`,
        "output"
      );
    } else {
      titulo.innerHTML = "Elige un nombre";
      mostrarMensaje("El nombre debe tener entre 3 y 20 caracteres.", "output");
      botonElegirRaza.style.display = "none";
      btnCrearPj.style.display = "inline";
      titulo.style.display = "inline";
      ocultar.style.display = "none";
      inputName.style.display = "inline";
    }
  } else {
    titulo.innerHTML = "Elige un nombre valido";
    mostrarMensaje("Por favor, ingrese un nombre válido.", "output");
    botonElegirRaza.style.display = "none";
    btnCrearPj.style.display = "inline";
    titulo.style.display = "inline";
    gi;
    ocultar.style.display = "none";
    inputName.style.display = "inline";
  }
}
function mostrarMensaje(mensaje, elementoId) {
  const outputDiv = document.getElementById(elementoId);

  // Verifica si el elemento existe antes de intentar modificar su contenido

  if (outputDiv) {
    outputDiv.innerHTML = `<p class="text-center text-white mt-5">${mensaje}</p>`;
  } else {
    console.error(`Elemento con ID ${elementoId} no encontrado.`);
  }
}

// EVENTOS
btnCrearPj.addEventListener("click", () => {
  inicializarPersonaje();
  btnCrearPj.style.display = "none";
  inputName.style.display = "none";
});
/// ELEGIR RAZA
function razaTime() {
  let razaIndex = razaSelector.value - 1;
  titulo.innerHTML = `${personaje.nombre},`;
  titulo.innerHTML = `Selecciona tu raza`;
  if (razaIndex >= 0 && razaIndex < razas.length) {
    personaje.raza = razas[razaIndex];
  } else if (razaIndex == 0) {
    mostrarMensaje("Información sobre las razas: (en proceso)", "output");
  }
}

botonElegirRaza.addEventListener("click", () => {
  razaTime();
  let continuarJuego = document.getElementById("continuarJuego");
  continuarJuego.style.display = "inline";
  botonElegirRaza.style.display = "none";
  formClass.style.display = "none";
  mostrarMensaje(
    `Perfecto ${personaje.nombre}, entonces tu raza es ${personaje.raza
      .nombre}. <br\> Acá tenes información sobre tu raza`,
    "output"
  );
  mostrarTablaRaza(personaje.raza);
  localStorage.setItem("razaPersonaje", JSON.stringify(personaje.raza));
});

continuarJuego.addEventListener("click", () => {
  outputDiv = document.getElementById("output2");
  outputDiv.style.display = "none";
  titulo.innerHTML = "Despertaste";
  mostrarMensaje(
    `¡Hola ${personaje.nombre}!. Menos mal despertaste.Mi nombre es Fulanito y te he estado cuidando. Que bien que despertaste! En serio, necesitamos cruzar ese rio y nada mejor que un ${personaje
      .raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
    "output"
  );

  continuarJuego.addEventListener("click", () => {
    titulo.innerHTML = "Cruzar el rio";
    mostrarMensaje(
      `...necesitamos cruzar ese rio y nada mejor que un ${personaje.raza
        .nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
      "output"
    );
    let choises = document.getElementById("choises__div");
    choises.style.display = "flex";
  });
});

function mostrarTablaRaza(raza) {
  const tablaHTML = `
    <table class="text-center" border="1">
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
  `;

  document.getElementById("output2").insertAdjacentHTML("beforeend", tablaHTML);
}

/////////////////////////// / .
////// START SECTION ////// /
/////////////////////////// /

startGame.addEventListener("click", () => {
  // volvemos a mostrar lo necesario para el inicio y el ocultamos el boton de start
  startGame.style.display = "none";
  titulo.style.display = "inline";
  inputName.style.display = "flex";
  btnCrearPj.style.display = "inline";
});

continuarJuego.addEventListener("click", () => {
  mostrarMensaje(-"Hola", "output");
  outputDiv = document.getElementById("output2");
  outputDiv.style.display = "none";
  titulo.innerHTML = "Despertaste";
  mostrarMensaje(
    `Anciano: ¡Hola ${personaje.nombre}!. Menos mal despertaste. Mi nombre es Fulanito Fulano y te he estado cuidando. Que bien que despertaste! En serio, necesitamos cruzar ese rio y nada mejor que un ${personaje
      .raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
    "output"
  );

  // cuando volvemos a tocar ocultamos el botón, y abrimos el menu desplegable.
  continuarJuego.addEventListener("click", () => {
    mostrarMensaje(
      `Anciano: ...necesitamos cruzar ese rio y nada mejor que un ${personaje
        .raza.nombre} para hacerlo... Te sigo, en serio. ¡En serio!`,
      "output"
    );
    const continuarJuego2 = document.querySelector('#continuarJuego2');
    let choises = document.getElementById("choises__div");
    choises.style.display = "flex";
    continuarJuego2.style.display = 'flex';
    continuarJuego.style.display = 'none';

    mostrarMensaje("Cruzar nadando y dejar al anciano", "ch1"); // OP 1
    mostrarMensaje("Cargar a cuestas al anciano y cruzar", "ch2"); // OP 2
    mostrarMensaje("Quizás sea una mejor idea no intentarlo...", "ch3"); // OP 3
    mostrarMensaje("Matar al anciano", "ch4"); // OP 4
  });
});

const evento = () => {
  const choises = document.getElementById("choises");
  // Verificar que el div esté visible (display sea 'flex')
  if (choises) {

    // Opcion 1   

    // si el valor del select es "1" entonces // 
    // redondea hacia abajo un numero random entre 0 y 1 multiplicado por el atributo "Agi" //
    // de la raza que hayamos elegido, y si ese resultado es mayor a 2 la acción se realiza. //
    // Sino fracasa, la idea es que mientras más bajo sea más terrible será la consecuencia, y lo mismo //
    // si es un número alto pero en torno al beneficio. //

    if (choises.value === "1") {
      if (Math.floor(Math.random() * personaje.raza.Agi * 10 / 1.5) >= 12) {
        mostrarMensaje(
          'Haz cruzado el río con éxito y dejado al anciano atrás. <br/><br/> Anciano: Eh! No me dejes eh!', 'output');
          // ocultamos y mostramos para la proxima acción.
          btnJuego2.style.display = 'none';
          continuarJuego.style.display = 'flex';
          choises.style.display = 'none';




      } else {
        console.error('Te has ahogado en el intento. <br/> Anciano: Jajajaja, te querías escapar sin eh. Que idiota, en serio!');
      }
    } else if (choises.value === "2") {
      console.error("Han cruzado el río con éxito");




    } else if (choises.value === "3") {
      console.info('Anciano: Pero si con esa cara de miedo, desde ya te digo que mejor ni lo intentemos!')
    }



  } else {
    console.error('Hay algo mal');
  }
}

const btnJuego2 = document.querySelector('#continuarJuego2');
btnJuego2.addEventListener('click', evento); // 


