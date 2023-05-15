var tab = ["Audrey", "Aurelien", "Flavien", "Jeremy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];
var saisie = window.prompt('Veuillez choisir un prénom parmi ${[...tab]}.');
if (tab.includes(saisie)) {
    tab.splice(tab.indexOf(saisie), 1);
    tab.push(" ");
    document.write(tab);
}
else { alert("erreur"); }