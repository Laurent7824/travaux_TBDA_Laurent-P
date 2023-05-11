// Demander à l'utilisateur d'entrer les valeurs de N et X

var N = prompt("Entrez le nombre multiples à calculer :");
var X = prompt("Entrez le nombre entier dont vous voulez calculer les multiples :");

// Convertir les valeurs en nombres entiers

N = parseInt(N);
X = parseInt(X);

// Afficher le N premiers multiples de X

for (var i = 1; i <= N; i++) {
    console.log(X * i);
}