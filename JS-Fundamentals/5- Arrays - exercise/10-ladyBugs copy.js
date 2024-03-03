function ladyBugs(input) {
    let fields = input.shift();
    let bugsPosition = input.shift().split(' ');

    let field = []; 

    for (let i = 0; i < fields; i++) {
        field.push(0);
    }
    for (const bug of bugsPosition) {
        let currBug = Number(bug);
        if (currBug < 0 || currBug >= fields) {
            continue;
        }
        field[currBug] = 1;
    }

    for (let i = 0; i < input.length; i++) {
        let [currPosition, movePosition, newPosition] = input[i].split(' ');
        currPosition = Number(currPosition);
        newPosition = Number(newPosition);
        if (newPosition < 0 && movePosition === 'right') {
            newPosition = Math.abs(newPosition);
            movePosition = 'left';
        }
        if (newPosition < 0 && movePosition === 'left') {
            newPosition = Math.abs(newPosition);
            movePosition = 'right';
        }
        switch (movePosition) {
            case 'right':
                if (field[currPosition] === 1) {
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
                }
                break;
            case 'left':
                if (field[currPosition] === 1) {
                    for (let l = currPosition; l >= 0; l--) {
                        if (field[currPosition - newPosition] === 0 && currPosition - newPosition >= 0 && currPosition - newPosition < field.length) {
                            field[currPosition - newPosition] = 1;
                            field[currPosition] = 0;
                            break;
                        } else {
                            newPosition += newPosition;
                            if (currPosition - newPosition < 0) {
                                field[currPosition] = 0;
                                break;
                            }
                        }
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
);