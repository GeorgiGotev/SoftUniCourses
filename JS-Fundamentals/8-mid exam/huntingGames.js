function huntingGames(input) {
    let days = Number(input.shift());
    let ppl = Number(input.shift());
    let energy = Number(input.shift());
    let water = days * ppl * Number(input.shift());
    let food = days * ppl * Number(input.shift());
    let daysCounter = 0;

    while (energy > 0) {
        if (input.length >= 1) {
            daysCounter++;
            
            energy -= Number(input.shift());
            if(energy<=0){
                break;
            }
            if (daysCounter % 2 === 0) {
                energy += energy * 0.05;
                water = water * 0.7;
            }
            if (daysCounter % 3 === 0) {
                food -= food / ppl;
                energy += energy * 0.1;
            }
        } else {
            break;
        }
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }
}
huntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])
