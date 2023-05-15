// Saisie des variables
var PU = parseFloat(prompt("Entrez le prix unitaire du produit :")); // "parseFloat" permet de convertir une chaîne de caractère en un nombre flottant
var QTECOM = parseInt(prompt("Entrez la quandité commandée :")); // "parseInt" permet de convertir une chaîne de caractère en un nombre entier

// Calcul du total avant remise
var TOT = PU * QTECOM;
console.log(TOT);

// Calcul de la remise
var REM;
if (TOT >= 100 && TOT <= 200) { // La condition à Analyser...
    REM = TOT * 0.05;
}
else if (TOT > 200) {
    REM = TOT * 0.1;
}
else {
    REM = 0;
}
console.log(REM);
// Calcul du total remisé
var TOTREM = TOT - REM;
console.log(TOTREM);

// Calcul du port
var PORT;
if (TOTREM > 500) {
    PORT = 0;
}
else {
    PORT = Math.max(TOTREM * 0.02, 6);
}
console.log(PORT); // Affiche la valeur de PORT dans la console