function solve(arr) {
    let counter = 0;
    let result = [];
    for (const command of arr) {
        counter++
        if (command === 'add') {
            result.push(counter);
        } else {
            result.pop();
        }
    }
    if (result.length) {
        console.log(result.join('\n'));
    }else{
        console.log('Empty');
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);