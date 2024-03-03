function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let line = input.shift();
    let cupidPosition = 0;

    while (line !== 'Love!') {
        let [command, jumpLength] = line.split(' ');
        cupidPosition += Number(jumpLength);
        if (cupidPosition >= neighborhood.length) {
            cupidPosition = 0;
        }
        neighborhood[cupidPosition] -= 2;
        if (neighborhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} has Valentine's day.`);
        }
        if (neighborhood[cupidPosition] < 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        }

        line = input.shift();
    }
    counter = 0;
    for (const house of neighborhood) {
        if (house > 0) {
            counter++;
        }
    }
    console.log(`Cupid's last position was ${cupidPosition}.`);
    if (counter === 0) {
        console.log("Mission was successful.");
    }else{
    console.log(`Cupid has failed ${counter} places.`);
}


}
heartDelivery(["2@2@2@2",
    "Jump 0",
    "Jump 1",
    'jump 1',
    'jump 1',
    "Love!"])

    ;