function cs(input) {
    let energy = Number(input.shift());
    let command = input.shift();
    let counter = 0;
    while (command !== 'End of battle') {
        command = Number(command);
        if (energy < command) {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            break;
        }
        counter++;
        if (counter % 3 === 0) {
            energy += counter;
        }
        energy -= command;

        command = input.shift();
    }
    if(command==='End of battle'){
    console.log(`Won battles: ${counter}. Energy left: ${energy}`);
 }
}

cs(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

console.log(`=============`);

cs(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);





;
