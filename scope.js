//Determina la accesibilidad del código.ç
//Puede ser global o local.

/*locales: dentro de una función y solo se puede acceder desde
ella, o desde una anidada (dentro de ella)
Globales: podemos acceder a ella desde cualquier parte el código.ç
var es variable local.
*/

var variableGlobal = "Esta es Global";

var miFunction = function() {
    var variableLocal = "Esta es local";
    alert(variableLocal);
    // alert(variableGlobal);
    variableGlobal = "Esta es Global, modificada";
    var FuncionLocal = function() {
        var variableLocal = "Esta es variable local, denro de función local";
        alert(variableLocal); //Ejecuta esta función. Si no estuviera ejecutaría la del nivel superior.
    }
    FunctionLocal();
}

miFunction();
//alert(variableGlobal);

//Para proteger el código, utilizaremos una función autoinvocada. Así el código que esté afuera no puede acceder al que está dentro (anidada).
(function() {
        //codigo para que se autoinvoque
        var variableGlobal = "Esta es Global";

        var miFunction = function() {
            var variableLocal = "Esta es local";
            alert(variableLocal);
            // alert(variableGlobal);
            variableGlobal = "Esta es Global, modificada";
            var FuncionLocal = function() {
                var variableLocal = "Esta es variable local, denro de función local";
                alert(variableLocal); //Ejecuta esta función. Si no estuviera ejecutaría la del nivel superior.
            }
            FunctionLocal();
        }())