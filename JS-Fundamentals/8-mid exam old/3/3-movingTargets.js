function movingTargets(input) {

    let targetArr = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'End') {
        let [command, index, power] = line.split(' ');
        index = Number(index);
        power = Number(power);
        switch (command) {
            case 'Shoot':
                if (targetArr[index]) {
                    targetArr[index] -= power;
                    if (targetArr[index] <= 0) {
                        targetArr.splice(index, 1);
                    } 
                }
                break;
            case 'Add':
                if (targetArr[index]) {
                    targetArr.splice(index, 0, power);
                }else {
                    console.log(`Invalid placement!`);
                }
                break;
            case 'Strike':
                if (targetArr[index - power] && targetArr[index + power]) {
                    targetArr.splice(index - power, (power * 2) + 1)
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }

        line = input.shift();
    }
    if (line === 'End') {
        console.log(targetArr.join('|'));
    }

}
movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
    ;