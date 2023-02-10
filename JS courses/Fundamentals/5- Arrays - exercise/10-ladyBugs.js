function ladyBugs(input) {
    let fields = input.shift();
    let bugsPosition = input.shift().split(' ');
    let field = new Array(fields).fill(0);

    bugsPosition.forEach(element => {
        element = Number(element);
        if (field[element] === 0) {
            field[element] = 1;
        }
    });

    for (let i = 0; i < input.length; i++) {
        let [currPosition, movePosition, newPosition] = input[i].split(' ');
        currPosition = Number(currPosition);
        newPosition = Number(newPosition);

        if (currPosition >= field.length || currPosition < 0 || field[currPosition] === 0) {
            continue;
        }

        switch (movePosition) {
            case 'right':

                for (let r = 0; r < field.length; r++) { 
                    if (field[currPosition + newPosition] === 0) {  
                        field[currPosition + newPosition] = 1;
                        field[currPosition] = 0;
                        break;
                    } else {
                        newPosition += newPosition;
                        if (field[currPosition + newPosition] === undefined) {
                            field[currPosition] = 0;
                            break;

                        }
                    }
                }
                break;
            case 'left':

                for (let l = field.length; l >= 0; l--) {  
                    if (field[currPosition - newPosition] === 0) {
                        field[currPosition - newPosition] = 1;
                        field[currPosition] = 0;
                        break;
                    } else {
                        newPosition += newPosition;
                        if (field[currPosition - newPosition] === undefined) {   
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
ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1']




);