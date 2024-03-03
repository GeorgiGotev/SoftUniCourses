function piccolo(arrays) {
    let carsInParking = {};
    for (const iterator of arrays) {
        let [command, carNumber] = iterator.split(', ');
        if (command === 'IN') {
            carsInParking[carNumber] = carNumber
        } else if (command === 'OUT') {
            delete carsInParking[carNumber];
        }
    }

    let sorted = Object.entries(carsInParking).sort();



    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');

    }
    //console.log(sorted.join('\n'));
    sorted.forEach(element => {
        console.log(element[0]);
    });
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

);