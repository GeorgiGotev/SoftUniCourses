function dungeonDesk(input) {
    let dungeons = input[0].split('|');
    
    let health = 100;
    let room = 0;
    let flag = true;
    let bitcoins = 0;
    for (const dungeon of dungeons) {

        let [command, stat] = dungeon.split(' ');
        stat = Number(stat);
        room++
        switch (command) {
            case 'potion':
                let currHp = health;
                health += stat;
                if (health > 100) {
                    stat = 100 - currHp;
                    health = 100;
                }
                console.log(`You healed for ${stat} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case 'chest':
                bitcoins += stat;
                console.log(`You found ${stat} coins.`);
                break;
            default:
                health -= stat;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${room}`);
                    flag = false;
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }
    if (flag) {
        console.log(`You've made it!`);
        console.log(`Coins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonDesk(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);