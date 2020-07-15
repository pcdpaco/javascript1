//Reemplazar, eliminar y añadir nodos en el DOM

var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo Texto2"); //crea el nodo

elemento.appendChild(contenido); //crea el elemento


var primerElemento = document.getElementById("primero");
//para acceder al texto que contiene
//primerElemento.innerHtml = "Nuevo Texto2"; //pondría la cursiva
// primerElemento.textContent = "Nuevo Texto2 <i>OK</i>"; //si pusiéramos modificadores se escribiría literalmente sin el efecto

var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento, referencia);


//otra
var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[0];
padre.removeChild(referencia); //elimina el primer elemento