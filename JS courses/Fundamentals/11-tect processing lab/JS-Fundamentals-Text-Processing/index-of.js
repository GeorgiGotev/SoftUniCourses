// String searching with indexOf
let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam a dolor at asperiores, optio voluptatem id delectus incidunt esse sed!dolor'
let dolorIndex = text.indexOf('dolor');
console.log(dolorIndex);

// find second dolor
let secondDolorIndex = text.indexOf('dolor', dolorIndex + 1);
console.log(secondDolorIndex);

// search word that is missing - returns -1
let missingWordIndex = text.indexOf('ivaylo'); 
console.log(missingWordIndex);

// get all indexes
let index = text.indexOf('dolor');
while (index >= 0) {
    console.log('Dolor found on ' + index + ' position');

    index = text.indexOf('dolor', index + 1);
}

// lastIndexOf
let lastDolorIndex = text.lastIndexOf('dolor');
console.log(lastDolorIndex);