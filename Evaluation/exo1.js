var age = 0;
var nbMoins20 = 0;
var nbEntre20et40 = 0;
var nbPlus40 = 0;

while (age >= 0) {

    age = parseInt(prompt("Entrez un âge :"));
    if (age < 20) {
        nbMoins20++;
    }
    else if (age >= 20 && age <= 40) {
        nbEntre20et40++;
    }
    else if (age > 40 && age < 100) {
        nbPlus40++;
    }
    else {
        nbPlus40++;
        break;
    }

}
document.write("Nombre de jeune est"+nbMoins20 +"<br>");
document.write("Nombre de moyens est"+nbEntre20et40+"<br>");
document.write("Nombre de vieux est"+nbPlus40);