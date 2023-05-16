// Déclarations des variables
var age = 0;
var nbMoins20 = 0;
var nbEntre20et40 = 0;
var nbPlus40 = 0;

// J'utilise une boucle
while (age >= 0) {

    age = parseInt(prompt("Entrez un âge :")); // Je convertie un string (Chaîne de caractère) en un nombre entier
    if (age < 20) { // Si l'âge est inférieur à 20
        nbMoins20++; // On incrémente de 1 la valeur de la variable nbMoins20
    }
    else if (age >= 20 && age <= 40) { // Sinon si l'âge est compris entre 20 et 40 ans
        nbEntre20et40++; // On incrémente de 1 la valeur de la variable nbEntre20et40
    }
    else if (age > 40 && age < 100) { // Sinon si l'âge est compris entre 40 et 100 ans
        nbPlus40++; // On incrémente de 1 la valeur de la variable nbPlus40
    }
    else {
        nbPlus40++;
        break; // Fin de la boucle
    }

}
document.write("Nombre de jeune est"+nbMoins20 +"<br>");
document.write("Nombre de moyens est"+nbEntre20et40+"<br>");
document.write("Nombre de vieux est"+nbPlus40);