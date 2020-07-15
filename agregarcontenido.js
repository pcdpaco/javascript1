//acceso a los elementos DOM

var elementosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("segundo");


//AGREGAR NODOS A NUESTRO DOCUMENTO WEB

// 1. Crear el elemento
var elemento = document.createElement("h2");

// 2. Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");

// 3. Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
// 4. Agregar atributos al elemento
elemento.setAttribute("align", "center");
// 5. Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);
//Hemos creado el elemento subtítulo en el div con un h2 y el texto "Este es nuestro titular", alineado al centro.

//añadir elemento li
var elemento = document.createElement("li");
contenido = document.createTextNode("Nuevo Texto");
elemento.appendChild(contenido);
//document.body.appendChild(elemento);
//para agregarlo al final de la lista
//var padre = document.getElementById("lista");
//de esta forma accedemos al primer elemento li, en lugar de al padre ol
var padre = document.getElementsByTagName("li")[0].parentNode;
//padre.appendChild(contenido); //agrega dentro el elemento
primerElemento = document.getElementsByTagName("li")[1];
padre.insertBefore(elemento, primerElemento);