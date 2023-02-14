function treasureHunt(input) {
    let initialLoot = input.shift().split('|');
    let command = input.shift();

    while (command !== 'Yohoho!') {
        let action = command.split(' ');
        switch (action[0]) {
            case 'Loot':
                for (let i = 1; i < action.length; i++) {
                    if (!initialLoot.includes(action[i])) {
                        initialLoot.unshift(action[i]);
                    }
                }
                break;
            case 'Drop':
                action[1] = Number(action[1]);
                if (action[1] >= 0 && action[1] < initialLoot.length) {
                    let removed = initialLoot[action[1]];
                    initialLoot.splice(action[1], 1);
                    initialLoot.push(removed);
                }
                break;
            case 'Steal':
                action[1] = Number(action[1]);                        ////////////////////????????????
                let result = initialLoot.splice((-action[1]), action[1]) ////////////////???????????
                console.log(result.join(', ')); ///////////////????
                break;
        }
        command = input.shift();
    }
    let sum = 0;
    for (const item of initialLoot) {
        sum += item.length;
    }
    if (initialLoot.length > 0) {
        console.log(`Average treasure gain: ${(sum / initialLoot.length).toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])

);