function inventory(input) {
    let journalItems = input.shift().split(', ');
    let line = input.shift();
    while (line !== 'Craft!') {
        let [command, item] = line.split(' - ');
        let [item1, item2] = item.split(':');

        switch (command) {
            case 'Collect':
                if (!journalItems.includes(item1)) {
                    journalItems.push(item1)
                }
                break;
            case 'Drop':
                if (journalItems.includes(item1)) {
                    let index = journalItems.indexOf(item1);
                    journalItems.splice(index, 1);
                }
                break;
            case 'Combine Items':
                if (journalItems.includes(item1)) {
                    let index = journalItems.indexOf(item1);
                    journalItems.splice(index+1, 0, item2);
                }
                break;
            case 'Renew':
                if (journalItems.includes(item1)) {
                    let index = journalItems.indexOf(item1);
                    journalItems.splice(index, 1);
                    journalItems.push(item1);
                }
                break;
        }
        line = input.shift();
    }
    console.log(journalItems.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

);