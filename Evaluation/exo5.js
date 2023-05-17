console.log('Connecté !');
// Déclarations des variables

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const personneInput = document.getElementById("personne");
const personneError = document.getElementById("personne-error");
const codepostalInput = document.getElementById("codepostal");
const codepostalError = document.getElementById("codepostalError");
const societe = document.getElementById("societe");
const envoyer = document.getElementsByClassName("button1");
// 

societe.addEventListener("input", function event)
// Vérification de l'adresse Mail...

emailInput.addEventListener("input", function (event) {
    if (!emailInput.checkValidity()) {
        emailError.textContent = alert("Veuillez rentrez une adresse Email valide svp ! :"); // Représente le contenu textuel
        emailError.style.display = "block";
    }
    else {
        emailError.textContent = "";
        emailError.style.display = "none";
    }
});

// Vérification de la personne à contacter...

personneInput.addEventListener("input", function (event) {
    if (!personneInput.checkValidity()) {
        personneError.textContent = alert("Veuillez rentrez le nom de la personne à contacter svp !");
        personneError.style.display = "block";
    }
    else {
        personneError.textContent = "";
        personneError.style.display = "none";
    }
});

// Vérification du code postal...

codepostalInput.addEventListener("input", function (event) {
    if (!codepostalInput.checkValidity()) {
        codepostalError.textContent = alert("Veuillez rentrez le code postal svp !");
        codepostalError.style.display = "block";
    }
    else {
        personneError.textContent = "";
        personneError.style.display = "none";
    }
});

//  Vérification du click sur le bouton envoi

document.querySelector('.button1').onclick = function () {
    alert('Formulaire envoyé !');
}

// Vérification du click sur le bouton annulé

document.querySelector('.button2').onclick = function () {
    alert('Formulaire refusé !');
}

