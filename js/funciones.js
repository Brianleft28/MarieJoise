function inicializarPersonaje() {
  const inputName = document.getElementById("inputName");
  if (inputName.value) {
    const nombre = inputName.value.trim();
    // Elimina espacios en blanco al principio y al final del nombre
    // Verifica la longitud del nombre
    if (nombre.length >= 3 && nombre.length <= 20) {
      personaje.nombre = nombre;
      // ocultamos y mostramos
      startGame.style.display = "none";
      inputName.style.display = "none";
      btnCrearPj.style.display = "none";
      btnCrearPj.style.display = "none";
      ocultar.style.display = "none";
      botonElegirRaza.style.display = "inline";
      let formClass = document.getElementById("formClass");
      formClass.style.display = "flex";
      // modificamos el titutlo
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
    ocultar.style.display = "none";
    inputName.style.display = "inline";
  }
}

function mostrarMensaje(mensaje, elementoId) {
  const outputDiv = document.getElementById(elementoId);
  outputDiv.innerHTML = `<p class="text-center bg-dark text-white mt-5">${mensaje}</p>`;
}

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
  `;

  document.getElementById("output2").insertAdjacentHTML("beforeend", tablaHTML);
}
