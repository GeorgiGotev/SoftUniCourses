function flightSchedule(input) {
    let flights = input.shift();
    let changedFlights = input.shift();
    let flightStatus = input.shift();

    let objectFlights = {};

    for (const flight of flights) {

        let line = flight.split(' ')
        let number = line.shift();
        let destinationName = [...line];
        let destination = '';
        if (destinationName[1] === undefined) {
            destination = destinationName[0];
        } else {
            destination = `${destinationName[0]} ${destinationName[1]}`;
        }

        objectFlights[number] = {
            Destination: destination,
            Status: 'Ready to fly',
        };
    }


    for (const change of changedFlights) {

        let [number, currStatus] = change.split(' ');

        if (objectFlights.hasOwnProperty(number)) {
            objectFlights[number].Status = currStatus;

        }
    }



    for (const destination in objectFlights) {

        if (objectFlights[destination].Status == flightStatus) {
            console.log(objectFlights[destination]);
        }

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