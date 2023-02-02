function arrayModifier(input) {

    let array = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'end') {
        let [command, index1, index2] = line.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        switch (command) {
            case 'swap':
                swap(command,index1,index2);
                break;
            case 'multiply':
                multiply(command,index1,index2);
                break;
            case 'decrease':
                decrease(command,index1,index2);
                break;
        }
        line = input.shift();
    }
    function swap(command,index1, index2) {
        let buff = array[index1];
        array[index1] = array[index2];
        array[index2] = buff;
    }
    function multiply(command, index1, index2) {
        array[index1] = array[index1] * array[index2];
    }
    function decrease(command, index1, index2) {
        for (let i = 0; i < array.length; i++) {
            array[i] -= 1;
        }
    }
    console.log(array.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);