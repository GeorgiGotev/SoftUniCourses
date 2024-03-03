function cards(input) {
    let line = input.shift().split(', ');
    let numberOfCommands = Number(input.shift());

    for (let i = 0; i < numberOfCommands; i++) {
        let [action, num1, num2] = input[i].split(', ');

        switch (action) {
            case 'Add':
                if (line.includes(num1)) {
                    console.log('Card is already in the deck');
                } else {
                    line.push(num1);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                if (!line.includes(num1)) {
                    console.log('Card not found');
                } else {
                    let index = line.indexOf(num1);
                    line.splice(index, 1);
                    console.log('Card successfully removed');
                }
                break;
            case 'Remove At':
                num1 = Number(num1);
                if (num1 < 0 || num1 >= line.length) {
                    console.log('Index out of range');
                } else {
                    line.splice(num1, 1);
                    console.log('Card successfully removed');
                }
                break;
            case 'Insert':
                num1 = Number(num1);
                if (num1 < 0 || num1 >= line.length) {
                    console.log('Index out of range');
                } else {
                    if (line.includes(num2)) {
                        console.log('Card is already added');
                    } else {
                        line.splice(num1, 0, num2);
                        console.log('Card successfully added');
                    }
                }
        }
    }
    console.log(line.join(', '));
}
cards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])


