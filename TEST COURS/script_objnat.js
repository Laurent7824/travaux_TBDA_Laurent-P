var valeurs = []; // Initialisation du tableau de valeurs.
var saisie = 1; // Initialisation de la valeur saisie
var somme=0;
while (saisie !== 0) {
    saisie = parseInt(window.prompt("Entrez une valeur numérique (0 pour arrêter)"));
    valeurs.push(saisie);
}
for (var i = 0; i < valeurs.length; i++) {
    somme=somme+valeurs[i];
    
}
alert("Nombre de saisies :"  +valeurs.length);
alert("Somme des valeurs :" + somme);
alert("Moyenne des valeurs :" +(somme/valeurs.length) );


