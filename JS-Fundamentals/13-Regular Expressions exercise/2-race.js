function race(input) {
    let obj = {};
    let namePattern = /[A-Z]|[a-z]/g;
    let distancePattern = /[0-9]/g;
    let racers = input.shift().split(', ');
    let line = input.shift();
    while (line !== 'end of race') {
        let racerName = line.match(namePattern).join('');
        let racerDistance = line.match(distancePattern).map(Number).reduce((a, b) => a + b, 0);
        if (racers.includes(racerName)) {
            if (!obj.hasOwnProperty(racerName)) {
                obj[racerName] = 0;
            }
            obj[racerName] += racerDistance;
        }
        line = input.shift();
    }
    let sorted = Object.keys(obj).sort((a, b) => b - a);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);