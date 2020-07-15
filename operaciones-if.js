// operaciones

let numeroUno = 60;
let numeroDos = 40;

//operadores
// +  -  *   /  .
let result = numeroUno + numeroDos;

console.log(result);

let name = "juan";
let apellido = "peralta";

let nombreCompleto = name + ' ' + apellido;

console.log(nombreCompleto);


let mayorOMenor = numeroDos > numeroUno;
let diferente = numeroDos != numeroUno;
console.log(mayorOMenor);
console.log(diferente);

let password = 'paco1234';
let input = 'asdjkls';

let comprobar = input == password;

console.log(comprobar);


//control de flujo
if (comprobar == true) {
    console.log("login perfecto");
} else {
    console.log("login incorrecto");
};

//Cadenas de texto
var texto = "Paco Cruz Delgado";
var nuevoTexto = texto.length;

console.log(nuevoTexto);