function numbers(input) {

    let numbers = input.shift().split(' ').map(Number);
    let command = input.shift();

    while (command !== 'Finish') {
        let [action, value, replacement] = command.split(' ');
        value = Number(value);
        replacement = Number(replacement);
        switch (action) {
            case 'Add':
                numbers.push(value)
                break;
            case 'Remove':
                if (numbers.includes(value)) {
                    let index = numbers.indexOf(value)
                    numbers.splice(index, 1);
                }
                break;
            case 'Replace':
                if (numbers.includes(value)) {
                    let index = numbers.indexOf(value);
                    numbers.splice(index, 1, replacement)
                }
                break;
            case 'Collapse':
                let result = numbers.filter(x => x >= value);
                numbers = result;
                break;
        }

        command = input.shift();
    }
    console.log(numbers.join(' '));

}
numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"])
