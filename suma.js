let suma = function(numero1, numero2) {
    var numero1 = parseFloat(document.getElementById("numero1").value); //obtener el valor del elemento con ese id
    var numero2 = parseFloat(document.getElementById("numero2").value);
    //parseFloat para convertir el string del input a numérico decimal
    var resultado = numero1 + numero2;
    return resultado;
}