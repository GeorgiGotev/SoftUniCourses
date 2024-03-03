function carWash(input) {
    let remove = input.shift();
    let start = 10;
    for (const command of input) {
        switch (command) {
            case 'soap': soap(); break;
            case 'water': water(); break;
            case 'vacuum cleaner': vacuum(); break;
            case 'mud': mud(); break;
        }
    }


    function soap() {
        start += 10;
    }
    function water() {
        start += start * 0.2;
    }
    function vacuum() {
        start += start * 0.25;
    }
    function mud() {
        start -= start * 0.1;
    }
    console.log(`The car is ${start.toFixed(2)}% clean.`);


}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);