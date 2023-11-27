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

function razaTime() {
  let razaIndex = razaSelector.value;
  let razaElegida = razas[razaIndex - 1];
  personaje.raza = razaElegida;
  if (razaIndex == 0) {
    mostrarMensaje(
      '<a target="blank_"href="razas.html">Aca </a>hay informacion sobre las razas disponibles:',
      "output"
    );
    let continuarJuego = getElementById("continuarJuego");
    let formClass = document.getElementById("formClass");
  } else if (razaIndex >= 0) {
    mostrarMensaje(
      `Entonces, la raza de $[personaje.nombre] es $[personaje.raza.nombre] \n a continuación la tabla de su raza:`,
      "output"
    );
  }

  btnCrearPj.addEventListener("click", () => {
    inicializarPersonaje();
  });
  

  //////// BOTON HACIA ELEGIR RAZA /////////////

  botonElegirRaza.addEventListener("click", () => {
    razaTime();
    let continuarJuego = document.getElementById("continuarJuego");
    continuarJuego.style.display = "inline";
    botonElegirRaza.style.display = "none";
    formClass.style.display = "none";
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Perfecto ${personaje.nombre}, entonces tu raza es ${personaje
      .raza.nombre}. <br\> Acá abajo tenes información sobre tu raza:`;
    mostrarTablaRaza(personaje.raza);
  });

  let continuarJuego = document.getElementById("continuarJuego");
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
      mostrarMensaje("Cruzar el rio solo", "ch1"); // OP 1
      mostrarMensaje("Cargar a cuestas y cruzar el rio", "ch2"); // OP 2
      mostrarMensaje("No cruzar el rio.", "ch3"); // OP 3
      mostrarMensaje("Preguntar que hay al otro lado del rio", "ch4"); // OP 4
    });
  });
}
