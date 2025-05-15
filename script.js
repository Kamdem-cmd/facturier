/**
 * @table : le tableau contenu dans le dom
 * @valider : le boutton valider pour l'enregistrement de nouvelle commande
 * @head : contient l'entête de base de notre tableau
 * @totaux : est la somme des newPrixTotal de toute les newDesignation
 */
const table = document.getElementById('table');
const valider = document.getElementById('valider');
let totaux = parseInt(0);

alert("🚨éviter de rafrîchir la page au risque de perdre les données du tableau 📉😫");

let head = `<th>Designation</th><th>Quantité</th><th>Prix unitaire</th><th>Prix total</th>`;

table.innerHTML = head;
valider.onclick = function(){
    /**
     * @content : le contenu qui sera rajouter à notre tableau
     * @newDesignation : la valeur de la nouvelle designation
     * @newQuantite : la valeur de la quantité du produit
     * @newPrixUnitaire : le prix unitaire du produit enregistré
     * @newPrixTotal : le produit entre le prix unitaire et la quantité du produit
     */
    const newDesignation = document.getElementById('newDesignation');
    const newQuantite = document.getElementById('newQuantité');
    const newPrixUnitaire = document.getElementById('newPrixUnitaire');
    let newPrixTotal = document.getElementById('newPrixTotal');

    //calcul du prix total
    if(!isNaN(newQuantite.value)  && !isNaN(newPrixUnitaire.value) && newPrixUnitaire.value > 0 && newQuantite.value > 0){
        newPrixTotal.value = newQuantite.value * newPrixUnitaire.value;

        totaux = parseInt(totaux) + parseInt(newPrixTotal.value);

        let content = `<tr><td>${newDesignation.value}</td><td>${newQuantite.value}</td><td>${newPrixUnitaire.value}</td><td>${newPrixTotal.value}</td></tr>`;

        valider.style.backgroundColor = "green";
        valider.style.color = "azure";
        if(newDesignation.value != "" && newQuantite.value != "" && newPrixUnitaire.value != ""){
            let basTable = `<tr><td colspan = 3>Net à payé</td><td>${totaux}</td></tr>`;
            head = head + content;
            table.innerHTML = head + basTable;

            // Réinitialiser les valeurs des inputs pour évité que l'utilisateur n'ai à tout éffacer de lui même.
            newDesignation.value= "";
            newPrixTotal.value= "";
            newPrixUnitaire.value= "";
            newQuantite.value = "";
        }
        else{
            alert("bien vouloir renseigner les differents champs svp!");
        }
    }
    else{
        alert("se rassurer que les valeurs des champs Quantité et Prix unitaire soient correctement remplis !");
    }
}
// Pour actualiser automatiquement
//window.location.reload()