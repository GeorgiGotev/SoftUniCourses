function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {

        let [command, equipment] = input[i].split(' ');
        let [equipmentOfUpgrade, upgradeItem] = equipment.split('-');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                if (inventory.includes(equipmentOfUpgrade)) {
                    let index = inventory.indexOf(equipmentOfUpgrade);
                    let upgrade = equipmentOfUpgrade + ":" + upgradeItem;
                    inventory.splice(index + 1, 0, upgrade);

                }
                break;
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);