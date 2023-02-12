/*
Exercice 02: changeProperty
• Mettez à jour la propriété name de l'objet codeloccol. Changez son nom 
de Coder en Happy Coder. Vous pouvez utiliser la notation par points ou 
par crochets.
const codeloccol = {
 name: 'Coder',
 legs: 4,
 tails: 1,
 friends: ['Codeloccol Campers'],
};
*/

const codeloccol = {
    name: 'Coder',
    legs: 4,
    tails: 1,
    friends: ['Codeloccol Campers'],
};

codeloccol.name = "Happy Coder"; // Mise a jour de la propriete

const affiche = function() {
    console.log("{\n   name:", codeloccol.name, ",");
    console.log("   legs:", codeloccol.legs, ",");
    console.log("   tails:", codeloccol.tails, ",");
    console.log("   friends:", codeloccol.friends, "\n}");
}
affiche();
