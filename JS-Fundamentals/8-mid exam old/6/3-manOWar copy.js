function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let command = input.shift();

    while (command !== 'Retire') {
        let [action, first, second, third] = command.split(' ');
        first = Number(first);
        second = Number(second);
        third = Number(third);

        switch (action) {
            case 'Fire':
                fire(warShip, first, second)
                break;
            case 'Defend':
                defend(pirateShip, first, second, third)
                break;
            case 'Repair':
                repair(pirateShip, first, second, maxHp)
                break;
            case 'Status':
                console.log(`${status(pirateShip, maxHp)} sections need repair.`);
                break;

        }
        if (isDead(warShip)) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (isDead(pirateShip)) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }
        command = input.shift();
    }

    if (command === 'Retire') {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, c) => a + c, 0)}`);
        console.log(`Warship status: ${warShip.reduce((a, c) => a + c, 0)}`);
    }

    function isDead(ship) {
        let isDead = ship.filter(x => x <= 0);
        return isDead.length > 0;
    }

    function fire(warShip, first, second) {
        if (warShip[first]) {
            warShip[first] -= second;
        }
    }
    function defend(pirateShip, first, second, third) {
        if (pirateShip[first] && pirateShip[second]) {
            for (let i = first; i <= second; i++) {
                pirateShip[i] -= third;
            }
        }
    }
    function repair(pirateShip, first, second, maxHp) {
        if (pirateShip[first]) {
            let healedToFull = maxHp - pirateShip[first];
            pirateShip[first] += Math.min(healedToFull, second);
        }
    }
    function status(pirateShip, maxHp) {
        let statusOfShip = pirateShip.filter(x => x < maxHp * 0.2);
        return statusOfShip.length;
    }
}
// manOWar((["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]));

manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])

);