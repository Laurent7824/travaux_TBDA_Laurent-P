// Déclaration de la variable (nombre)
// Je convertie le string en nombre entier
var nombre = parseInt(prompt("Saisir un nombre ?"));

// Déclaration de la fonction avec le paramètre (nombre)
/*J'utilise une boucle pour que la variable i vaut 1, sachant que i soit inférieureou égale à 10
on incrémentera i de 1*/
function TableMultiplication(nombre) {
    for (var i = 1; i <= 10; i++) {
        console.log(nombre + "X" + i + "=" + (nombre * i)); // On affiche dans la console le calcul du produit
    }
}
TableMultiplication(nombre); // On appel la fonction (nombre)
