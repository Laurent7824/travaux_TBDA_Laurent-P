
console.log('connecté !');
/*Déclarations des variables

var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
var personneInput = document.getElementById("personne");
var personneError = document.getElementById("personne-error");
var codepostalInput = document.getElementById("codepostal");
var codepostalError = document.getElementById("codepostalError");
var societeInput = document.getElementById("societe");
var envoyer = document.getElementsByClassName("button1");
*/

function validerFormulaire(){
    var societe = document.getElementById("societe").value;
    var personne = document.getElementById("personne").value;
    var adresse = document.getElementById("adresse").value;
    var codepostal = document.getElementById("codepostal").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    if(societe == "" || personne == "" ||
    adresse == "" || codepostal == "" || ville == "" ||
    email== "" || telephone == "") {
        alert("veuillez remplir tous les champs du formulaire !!!");
        return false;
    }
    else{
        return true;
    }
}
