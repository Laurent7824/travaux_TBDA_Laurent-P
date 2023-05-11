// Demande la taille du tableau à l'utilisateur.
var taille = prompt("Entrez la taille du tableau :");

// Créer un tableau vide de la taille saisie.
var tableau = new Array(taille);

//Remplir le tableau avec les valeurs saisies par l'utilisateur.
for (var i = 0; i < taille; i++) {
    tableau[i] = prompt("Entrez la valeur n°" + (i + 1) + ":");
}

// Afficher le contenu du tableau
console.log("Contenu du tableau :");
for(var i =0; i < taille;i++){
    console.log(tableau[i]);
}