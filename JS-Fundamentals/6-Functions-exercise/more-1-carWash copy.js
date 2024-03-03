function carWash(input) {
    let result = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;

    for (const command of input) {
        switch (command) {
            case 'soap': result = soap(result); break;
            case 'water': result = water(result); break;
            case 'vacuum cleaner': result = vacuum(result); break;
            case 'mud': result = mud(result); break;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);


}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);