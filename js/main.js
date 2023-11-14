// declaramos nuestro personaje y le asignamos un valor

let personaje = []

/* let nuevoPersonaje = document.getElementByID('newCharachter') */

function crearPersonaje(nombre){
    let name = prompt("Ingrese su nuevo nombre de personaje")
    if (name) {
        personaje.push(name)
        //////////////
        //////////////////////// SALUDO AL PERSONAJE ////////////////
        //                       EN CONSOLA Y ALERT                         
        console.log('Hola ' + personaje[0] + ', bienvenido a MarieJoise')
        ///// historia en consola /// 
        console.log('-----------------------------------------------------')
        console.log('Una tierra pacifica donde el cantar de las aves y la tranquilidad son nuestro pan de cada día.')
        console.log('-----------------------------------------------------')
    } 
}

// definimos el array de razas que existen en nuestro mundo
const razas = [
    {
       nombre: 'Humano',
       origen: 'MarieJoise',
       habEspecial: 'Tecnología',
           // Atributos de Raza//
           Str: 5, //Fuerza
           Int: 8, //Inteligencia
           Skill: 5, // Destreza 
           Agli: 5, // Agilidad
           Stealth: 5 // Sigilo
   },
   {
       nombre: 'Ogro',
       origen: 'Montañas',
       habEspecial: 'Fuerza Bruta',

           // Atributos de Raza // 
           Str: 8,
           Int: 3,
           Skill: 4,
           Agli: 2,
           Stealth:2
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
               Stealth: 6 // Sigilo
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
            Stealth: 5 //Sigilo
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
        Stealth: 5 //Sigilo
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
        Stealth: 5 //Sigilo
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
        Stealth: 5 //Sigilo
    }       
    ]              // / //
                 
/// Elegiremos una raza para nuestro personaje /// 
function elegirRaza (){
        let raza = prompt('Elegí una raza para tu personaje \r\r1-Humano\r2-Ogro\r3-Elfo\r4-Alto Elfo\r5-Elfo oscuro\r6-Demonio\r7-Celestial\r\r0 para más información sobre las razas\r')
   
    // Humano
        if (raza == 1){
    const human = razas.filter(r => r.nombre === 'Humano');
    console.log('La raza de ' + personaje + ' es: Humano')
    console.table(human)
} 
    // Ogro
        else if (raza == 2 ){
    const ogro = razas.filter(r => r.nombre === 'Ogro');
    console.log('La raza de ' + personaje + ' es: Ogro')
    console.table(ogro)
} 
    // Elfo
        else if (raza == 3){
    const elfo = razas.filter(r => r.nombre === 'Elfo');
    console.log('La raza de ' + personaje + ' es: Elfo')
    console.table(elfo)
}
    // Alto Elfo
        else if (raza == 4){
    const altoElfo = razas.filter(r => r.nombre === 'Alto Elfo');
    console.log('La raza de ' + personaje + ' es: Alto Elfo')
    console.table(altoElfo)
}
    // Elfo Oscuro
        else if (raza == 5){
    const elfoOscuro = razas.filter(r => r.nombre === 'Elfo Oscuro');
    console.log('La raza de ' + personaje + ' es: Elfo Oscuro')
    console.table(elfoOscuro)
}
    // Demonio
        else if (raza == 6){
    const demonio = razas.filter(r => r.nombre === 'Demonio');
    console.log('La raza de ' + personaje + ' es: Demonio')
    console.table(demonio)
}
    // Celestial
        else if (raza == 7){
    const elfo = razas.filter(r => r.nombre === 'Celestial');
    console.log('La raza de ' + personaje + ' es: Celestial')
    console.table(celestial)
}

else if (raza == 0) {
    console.log('Acá tenes información sobre las estadisticas base de cada una de las razas:')
    console.table(razas)

 } else {
    Alert('Ingresa una opción válida.')
 }
}

    

crearPersonaje()
elegirRaza()
// console.log(personaje) Empujo el nombre que creo en la funcion al array de personajes, así existe fuera de la función. //

