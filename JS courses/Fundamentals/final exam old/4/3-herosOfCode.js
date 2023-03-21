function heroes(input) {
    let party = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let heroes = input.shift().split(' ');
        let name = heroes.shift();
        let hp = Number(heroes.shift());
        let mana = Number(heroes.shift());
        party[name] = { hp, mana };
    }
    let command = input.shift();
    while (command !== 'End') {
        let array = command.split(' - ');
        let action = array.shift();
        let heroName = array.shift();
        switch (action) {
            case 'CastSpell':
                let mpNeeded = Number(array[0]);
                let spellName = array[1];
                if (party[heroName].mana >= mpNeeded) {
                    party[heroName].mana -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${party[heroName].mana} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(array[0]);
                let attacker = array[1];
                if (party[heroName].hp > damage) {
                    party[heroName].hp -= damage;
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${party[heroName].hp} HP left!`);
                } else {
                    delete party[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let manaRegeneration=Number(array[0]);
                let mpRegen=0;
                if(party[heroName].mana + manaRegeneration > 200){
                    mpRegen=200-party[heroName].mana;
                    party[heroName].mana=200;
                }else{
                    party[heroName].mana+=manaRegeneration;
                    mpRegen=manaRegeneration;
                }
                console.log(`${heroName} recharged for ${mpRegen} MP!`);
                break;
            
            case 'Heal':
                let hpRegeneration=Number(array[0]);
                let hpRegen=0;
                if(party[heroName].hp+hpRegeneration>100){
                    hpRegen=100-party[heroName].hp;
                    party[heroName].hp=100;
                }else{
                    party[heroName].hp+=hpRegeneration;
                    hpRegen=hpRegeneration;
                }
                console.log(`${heroName} healed for ${hpRegen} HP!`);
                break;
            
        }
        command = input.shift();
    }
    for (const key in party) {
        console.log(key);
        console.log(`  HP: ${party[key].hp}`);
        console.log(`  MP: ${party[key].mana}`);
    }
}
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);