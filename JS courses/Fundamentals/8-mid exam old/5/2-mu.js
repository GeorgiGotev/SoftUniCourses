function mu(input) {
    let dungeons = input.split('|');
    let hp = 100;
    let room = 0;
    let flag = true;
    let bitcoins = 0;
    for (const dungeon of dungeons) {
        let [command, stat] = dungeon.split(' ');
        stat = Number(stat);
        room++
        switch (command) {
            case 'potion':
                let currHp = hp;
                hp += stat;
                if (hp > 100) {
                    stat = 100 - currHp;
                    hp = 100;
                }
                console.log(`You healed for ${stat} hp.`);
                console.log(`Current health: ${hp} hp.`);

                break;
            case 'chest':
                bitcoins += stat;
                console.log(`You found ${stat} bitcoins.`);
                break;
            default:
                hp -= stat;
                if (hp <= 0) {
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
        console.log(`Health: ${hp}`);
    }
}
mu("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");