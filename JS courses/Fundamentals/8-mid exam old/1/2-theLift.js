function theLift(arr) {
    let firstEl = arr.shift();
    let people = Number(firstEl);
    let wagons = arr[0].split(' ').map(Number);
    let flag = false;

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            if (people >= 4 - wagons[i]) {
                people = people - (4 - wagons[i]);
                wagons[i] = 4
            } else {
                wagons[i] = people + wagons[i];
                people = 0;
                if (wagons[i] < 4) {
                    flag = true;
                }
            }
        } 
    }

    if (flag) {
        console.log(`The lift has empty spots!`);
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(wagons.join(' '));
}
theLift([
    "2",
    "3 0 0 0"
]);

