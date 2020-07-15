//bucles
let contador = 1;

while (contador < 51) {
    console.log(contador);
    //contador = contador - 1;
    contador++;
}

//cuidado con los bucles infinitos

let nombres = ['Paco', 'Juan', 'Jose', 'Pedro'];

console.log(nombres[2]); //se muestra el elemento 3
console.log(nombres.length); //muestra la longitud del array

for (let x = 0; x < nombres.length; x++) {
    console.log(nombres[x]);
}

for (let x = nombres.length; x >= 0; x--) {
    console.log(nombres[x]);
}