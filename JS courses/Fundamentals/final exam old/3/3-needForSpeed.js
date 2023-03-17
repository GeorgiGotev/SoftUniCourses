function needForSpeed(data) {
    let numberOfCars = data.shift();
    let obj = {};
    for (let i = 0; i < numberOfCars; i++) {
        let [car, km, fuel] = data.shift().split('|');
        obj[car] = {
            km: Number(km),
            fuel: Number(fuel),
        }
    }
    let line = data.shift();
    while (line !== 'Stop') {
        let [command, car, cm1, cm2] = line.split(' : ');
        cm1 = Number(cm1);
        cm2 = Number(cm2);
        switch (command) {
            case 'Drive':
                if (obj[car].fuel < cm2) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    obj[car].km += cm1;
                    obj[car].fuel -= cm2;
                    console.log(`${car} driven for ${cm1} kilometers. ${cm2} liters of fuel consumed."`);
                }
                if (obj[car].km >= 100000) {
                    console.log(`Time to sell the ${obj[car]}!`);
                }
                break;
            case 'Refuel':
                let ref = 0;
                if ((cm1 + obj[car].fuel )> 75) {
                    ref = 75 - obj[car].fuel;
                    obj[car].fuel = 75;
                } else {
                    obj[car].fuel += cm1;
                    ref = cm1;
                }
                console.log(`${car} refueled with ${ref} liters`);
                break;
            case 'Revert':

                break;
        }
        line = data.shift();
    }

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);