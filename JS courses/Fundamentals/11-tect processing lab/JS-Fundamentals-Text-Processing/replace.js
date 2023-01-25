let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam a dolor at asperiores, optio voluptatem id delectus incidunt esse sed!dolor'

// Repalce first occurance
let replacedDolor = text.replace('dolor', 'softuni');
console.log(replacedDolor);

// Replace all
let replaceAllDolor = text;
// while(replaceAllDolor.includes('dolor')) {
while(replaceAllDolor.indexOf('dolor') >= 0) {
    replaceAllDolor = replaceAllDolor.replace('dolor', 'softuni');
}

let rad = text.replaceAll('dolor', 'softuni');
console.log(replaceAllDolor);