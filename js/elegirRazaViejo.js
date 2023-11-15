
function elegirRaza (){
    let raza = prompt('Elegí una raza para tu personaje \r\r1-Humano\r2-Ogro\r3-Elfo\r4-Alto Elfo\r5-Elfo oscuro\r6-Demonio\r7-Celestial\r\r0 para más información sobre las razas\r')


// Humano
    if (raza == 1){
const human = razas.filter(r => r.nombre === 'Humano');
console.log('La raza de ' + personaje.nombre + ' es: Humano')
console.table(human)
} 
// Ogro
    else if (raza == 2 ){
const ogro = razas.filter(r => r.nombre === 'Ogro');
console.log('La raza de ' + personaje.nombre + ' es: Ogro')
console.table(ogro)
} 
// Elfo
    else if (raza == 3){
const elfo = razas.filter(r => r.nombre === 'Elfo');
console.log('La raza de ' + personaje.nombre + ' es: Elfo')
console.table(elfo)
}
// Alto Elfo
    else if (raza == 4){
const altoElfo = razas.filter(r => r.nombre === 'Alto Elfo');
console.log('La raza de ' + personaje.nombre + ' es: Alto Elfo')
console.table(altoElfo)
}
// Elfo Oscuro
    else if (raza == 5){
const elfoOscuro = razas.filter(r => r.nombre === 'Elfo Oscuro');
console.log('La raza de ' + personaje.nombre + ' es: Elfo Oscuro')
console.table(elfoOscuro)
}
// Demonio
    else if (raza == 6){
const demonio = razas.filter(r => r.nombre === 'Demonio');
console.log('La raza de ' + personaje.nombre+ ' es: Demonio')
console.table(demonio)
}
// Celestial
    else if (raza == 7){
const elfo = razas.filter(r => r.nombre === 'Celestial');
console.log('La raza de ' + personaje.nombre + ' es: Celestial')
console.table(celestial)
}

else if (raza == 0) {
console.log('Acá tenes información sobre las estadisticas base de cada una de las razas:')
console.table(razas)

} else {
Alert('Ingresa una opción válida.')
}
}