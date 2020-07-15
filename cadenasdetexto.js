//Cadenas de texto
var texto = "Paco Cruz Delgado";
var nuevoTexto = texto.length; //muestra la cantidad de caracteres
var nuevoTextoRecortado = texto.substring(5); //sustrae los caracteres desde la posición 0 a la 5
var nuevoTextoSustraer = texto.substr(0, 5); //Muestra caracteres desde la posición 0 a la 5
var nuevoTextoIndexOf1 = texto.indexOf("a"); //Devuelve en qué posición se encuentra la primera letra 'a'
var nuevoTextoIndexOf2 = texto.indexOf("a", 4); //Devuelve en qué posición se encuentra la letra 'a' a parir de la posición 4
// también se puede hacer así
var texto2 = texto.indexOf("o", texto2);
var nuevoTextoLastIndexOf1 = texto.lastIndexOf("o"); //Devuelve en qué posición se encuentra la primera letra 'a' empezando por el final
var nuevoTextoReplace = texto.replace(texto, "El otro"); //texto: texto a modificar.  El otro:  el texto que reemplaza al anterior.
//reemplazó "Paco Cruz Delgado" por "El otro"
//también se puede sustituir parte del texto. Vemos el ejemplo seguidamente
var nuevoTextoReplace2 = texto.replace("Paco", "El otro");
var nuevoTextoReplace3 = texto.replace("o", "_");
//A mayúsculas
var nuevoTextoUC = texto.toUpperCase();
var nuevoTextoLC = texto.toLowerCase();

document.write(nuevoTexto);
document.write(nuevoTextoRecortado);
document.write(nuevoTextoSustraer);
document.write(nuevoTextoIndexOf1);
document.write(nuevoTextoIndexOf2);
document.write(texto2);
document.write(nuevoTextoLastIndexOf1);
document.write(nuevoTextoReplace);
document.write(nuevoTextoReplace2);
document.write(nuevoTextoReplace3);
document.write(nuevoTextoUC);
document.write(nuevoTextoLC);