/* 
// LOGIN SENCILLO //
///////////////////


const username = document.getElementById("usuario") 
const password = document.getElementById("contraseña")
const button = document.getElementById("button") 
 
// tomamos los valores de los inputs por ID // 
//////// estoy aplicando lo de clase 5 para agregar usuario
 function Usuarios (u, p) {
    this.usuario = u, 
    this.password = p
}

const usr1 = new Usuarios("Brian", "holamundo")

const usr3 = new Usuarios("Brian2", "holamundo")
const usr4 = new Usuarios("Brian3", "holamundo")


console.log("------------------")
console.log("INFORMACIÓN PARA INGRESAR")
console.log(usr1) // los datos para entrar se van a imprimir en consola
console.log("------------------")

button.addEventListener('click', (e) => {  
    e.preventDefault()
/// con esta funcion, impido que la pagina se recargue cuando tocamos el boton
    let data =  {
        usuario: username.value,       // Aca estamos usando los datos que nos pasan los input,    
        password: password.value        // Username y Password, vienen desde los input que el mismo nombre,                         los valores que estan dentro (VALUE)
    }
    
    if (username.value == usr1.usuario && password.value == usr1.password &&
        username.value == usr2.usuario && password.value == usr2.password) {
        alert("entraste bien flaquito")
    } else 
    {alert("quien sos flaco")}
});

/////

// INCORPORANDO array 

// CREAR NUEVO USUARIO USUARIO 
const register = document.getElementById("registro")
.addEventListener('click', (e) => {  
    e.preventDefault()

const usr2 = new Usuarios(prompt("Ingresar usuario"),  prompt("ingresar contraseña"))
const Users = [usr1, usr2, usr3, usr4]
console.log("---------------")
console.log("Usuarios totales")
console.log([Users])

alert("Bievenido " + usr2.usuario + ", te has registrado con éxito")

});

// si quiero que usr2 exista afuera, para ingresar con el, como hago?
// no lo encuentra, ya que solo existe dentro de la funcion del evento registro 


 */