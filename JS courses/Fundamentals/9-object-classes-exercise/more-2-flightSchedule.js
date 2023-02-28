function flightSchedule(input) {
    let flights = input[0];
    let objectFlights = {};
    for (const flight of flights) {
        let [name, place] = flight.split(' ');
        objectFlights[name] = place;
    }
    let changedFlights = input[1];
    for (const change of changedFlights) {
        let [name, status] = change.split(' ');
        if (objectFlights.hasOwnProperty(name)) {
            objectFlights[status] = status;
        }
    }

    for (const flights in objectFlights) {
        console.log(objectFlights[flights]);
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);