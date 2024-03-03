function shootForWin(input) {

    let arr = input.shift().split(' ').map(Number);
    let command = input.shift();
    let shot = 0;
    while (command !== 'End') {
        index = Number(command);
        if (index >= 0 && index < arr.length) {
            if (arr[index] !== -1) {
                shot++;
                let buff = Number(arr[index]);
                arr[index] = -1;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] <= buff && arr[i] !== -1) {
                        arr[i] += buff;
                    } else if (arr[i] > buff) {
                        arr[i] -= buff;
                    }
                }
            }
        }

        command = input.shift();
    }
    console.log(`Shot targets: ${shot} -> ${arr.join(' ')}`);


}
shootForWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

);