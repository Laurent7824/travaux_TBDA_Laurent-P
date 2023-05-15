console.log("connecté");
var nombre = parseInt(prompt("Saisir un nombre ?"));
function TableMultiplication(nombre) {
    for (var i = 1; i <= 10; i++) {
        console.log(nombre + "X" + i + "=" + (nombre * i));
    }
}
TableMultiplication(nombre);
