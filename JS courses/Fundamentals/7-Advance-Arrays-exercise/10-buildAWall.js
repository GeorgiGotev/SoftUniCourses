function buildAWall(input) {
    let work = [];
    let cubic = 0;
    while (input.length * 30 !== input.reduce((a, b) => a + b)) {
        let counter = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                input[i]++;
                counter++;
            } else {
                continue;
            }
        }
        work.push(counter * 195);
        cubic += counter * 195;
    }
    console.log(work.join(', '));
    console.log(`${cubic * 1900} pesos`);

}
buildAWall([17, 22, 17, 19, 17]);