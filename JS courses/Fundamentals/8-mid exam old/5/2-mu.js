function mu(input) {
    let dungeons = input.split('|');
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
                console.log(`You found ${stat} bitcoins.`);
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
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
mu("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");