function pianist(input) {

    let numberOfPieces = Number(input.shift());
    let obj = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        obj[piece] = { composer, key }
    }

    let command = input.shift();
    while (command !== 'Stop') {
        let [action, piece, cm1, cm2] = command.split('|');
        switch (action) {
            case 'Add':
                if (obj.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    obj[piece] = { composer: cm1, key: cm2 };
                    console.log(`${piece} by ${cm1} in ${cm2} added to the collection!`);
                }
                break;
            case 'Remove':
                if (obj.hasOwnProperty(piece)) {
                    delete obj[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (obj.hasOwnProperty(piece)) {
                    obj[piece].key = cm1;
                    console.log(`Changed the key of ${piece} to ${cm1}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;

        }
        command = input.shift();
    }
  
    for (const key in obj) {
        console.log(`${key} -> Composer: ${obj[key].composer}, Key: ${obj[key].key}`);
    }


}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);