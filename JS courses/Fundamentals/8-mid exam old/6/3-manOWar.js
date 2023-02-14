function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let isWarshipSunken = false;
    let isPirateSunken = false;
    let command = input.shift();

    while (command !== 'Retire') {
        let [action, first, second, third] = command.split(' ');
        first = Number(first);
        second = Number(second);
        third = Number(third);
        switch (action) {
            case 'Fire':
                if (warShip[first]) {
                    warShip[first] -= second;
                    if (warShip[first] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        isWarshipSunken = true;
                        break;
                    }
                }
                break;
            case 'Defend':
                if (pirateShip[first] && pirateShip[second]) {
                    for (let i = first; i <= second; i++) {
                        pirateShip[i] -= third;
                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            isPirateSunken = true;
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                if (pirateShip[first]) {
                    pirateShip[first] += second;
                    if (pirateShip[first] > maxHp) {
                        pirateShip[first] = maxHp;
                    }
                }
                break;
            case 'Status':
                let count = 0;
                for (const section of pirateShip) {
                    let check = maxHp * 0.2;
                    if (section < check) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
        if (isWarshipSunken || isPirateSunken) {
            break;
        }
        command = input.shift();
    }
    if (!isWarshipSunken && !isPirateSunken) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
    }
}
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

);