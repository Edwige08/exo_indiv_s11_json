const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow

// Affiche dans la console : 
//    1. le type de data
//    2. le 1er objet du tableau d'objets
//    3. le nbre d'objets contenus dans le tableau
//    4. les informations de la candidate arrivée au 4e rang
//    5. l'âge moyen des candidates 

console.log(typeof data);

console.log(data[0]);

console.log(data.length);

for (let x = 0; x < data.length; x++) {
    if (data[x].ranking === 4) {
        console.log(data[x]);
    }
}

let ageSum = 0;
for (let x = 0; x < data.length; x++) {
    ageSum += data[x].age;
}
let ageMoy = ageSum / data.length;
console.log(ageMoy);
