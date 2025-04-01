const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow

// Affiche dans la console : 
//    1. le type de data
//    2. le 1er objet du tableau d'objets
//    3. le nbre d'objets contenus dans le tableau
//    4. les informations de la candidate arrivée au 4e rang
//    5. l'âge moyen des candidates 