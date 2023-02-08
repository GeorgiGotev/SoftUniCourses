function ladyBugs(input) {
    let fields = input.shift();
    let bugsPosition = input.shift().split(' ');
    let field = new Array(fields).fill(0);

    bugsPosition.forEach(element => field[element] = 1);
   
    for (let i = 0; i < input.length; i++) {
        let [currPosition, movePosition, newPosition] = input[i].split(' ');
        currPosition = Number(currPosition);
        newPosition = Number(newPosition);

        if (currPosition >= field.length || currPosition < 0 || field[currPosition] === 0) {
            continue;
        }

        switch (movePosition) {
            case 'right':
                for (let r = currPosition; r < field.length; r++) {
                    if (field[currPosition + newPosition] === 0 && currPosition + newPosition < field.length && currPosition + newPosition >= 0) {
                        field[currPosition + newPosition] = 1;
                        field[currPosition] = 0;
                        break;
                    } else {
                        newPosition += newPosition;
                        if (currPosition + newPosition >= field.length || currPosition + newPosition <= 0) {
                            field[currPosition] = 0;
                            break;
                        }
                    }
                }
                break;
            case 'left':
                for (let l = currPosition; l >= 0; l--) {
                    if (field[currPosition - newPosition] === 0 && currPosition - newPosition >= 0 && currPosition - newPosition < field.length) {
                        field[currPosition - newPosition] = 1;
                        field[currPosition] = 0;
                        break;
                    } else {
                        newPosition += newPosition;
                        if (currPosition - newPosition < 0 || currPosition-newPosition>=field.length) {
                            field[currPosition] = 0;
                            break;
                        }
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));
}
ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']

);