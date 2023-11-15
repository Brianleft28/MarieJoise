// let personaje = []

// en vez de hacer que el personaje sea un array, voy a hacer que sea un objeto 
//que contenga información sobre el personaje, incluido el nombre, la raza y los atributos:

let personaje = {
    nombre: "",
    raza:{},
    atributos:{},
}

// y en vez hacer un push al array personaje, voy a crear una función que asigne de alguna manera
// el nombre, la raza y los atributos al objeto de personaje


function inicializarPersonaje(){
    personaje.nombre = prompt("Ingrese el nombre de su personaje")
    if (personaje.nombre) {
        console.log('Hola ' + personaje.nombre + ', bienvenido a MarieJoise')
        ///// historia en consola /// 
        console.log('-----------------------------------------------------')
        console.log('Una tierra pacifica donde el cantar de las aves y la tranquilidad son nuestro pan de cada día.')
        console.log('-----------------------------------------------------')
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
    ]           
/// Elegiremos una raza para nuestro personaje /// 

// todo el codigo que use anteriormente, lo voy a dejar en un JS llamado elegirRazaViejo
// ya que encontré una manera para optimizar la eleccion de raza y no quiero perder el
// primer intento intuitivo

function elegirRaza(){
    let razaIndex = prompt('Elegí una raza para tu personaje...\n1-Humano\n2-Ogro\n3-Elfo\n4-Alto Elfo\n5-Elfo oscuro\n6-Demonio\n7-Celestial\n\n0 para más información sobre las razas')
         // si razaIndex es mayor que 1 y menos que el numero de objetos que tenemos en el array
        if (razaIndex >= 1 && razaIndex <= razas.length) {
        // personaje.raza = "" ahora es igual a razaIndex - 1, porque el array comienza en 0     
            personaje.raza = razas[razaIndex - 1]
            console.log('La raza de '+ personaje.nombre + ' es: ' + personaje.raza.nombre);
            console.log('Información de personaje:')
            console.table(personaje + personaje.raza)
        // Si el usuario ingresa 0, se muestra información sobre todas las razas
        } else if(razaIndex == 0) { 
            console.log('Acá tenes información sobre la estadistica de cada raza:');
            console.table(razas);
        } else {
            alert('Ingresa una opción válida')
        }
}

inicializarPersonaje()
elegirRaza()
// console.log(personaje) Empujo el nombre que creo en la funcion al array de personajes, así existe fuera de la función. //

