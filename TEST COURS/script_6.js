var anneeNaissance = prompt("Quelle est votre année de naissance ?");
var age = new Date().getFullYear() - anneeNaissance;

if (age >= 18) {
    alert("Vous êtes majeur, vous avez " + age + " ans.");
} else {
    alert("Vous êtes mineur, vous avez " + age + " ans.");
}