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
                    console.log(`${car} driven for ${cm1} kilometers. ${cm2} liters of fuel consumed.`);
                }
                if (obj[car].km >= 100000) {
                    delete obj[car];
                    console.log(`Time to sell the ${car}!`);
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
                if(obj[car].km - cm1 < 10000){
                    obj[car].km=10000;
                }else{
                    obj[car].km= obj[car].km-cm1;
                    console.log(`${car} mileage decreased by ${cm1} kilometers`);
                }
                break;
        }
        line = data.shift();
    }
    for (const key in obj) {
        console.log(`${key} -> Mileage: ${obj[key].km} kms, Fuel in the tank: ${obj[key].fuel} lt.`);
    }

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
);