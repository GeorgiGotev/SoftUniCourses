function theLift(arr) {
    let firstEl = arr.shift();
    let people = Number(firstEl);
    let wagons = arr[0].split(' ').map(Number);
    let flag = false;

    for (let i = 0; i < wagons.length; i++) {

        let currWagon = wagons[i];
        if (currWagon < 4) {
            if (people >= 4 - currWagon) {
                people = people - (4 - currWagon);
                wagons[i] = 4
            } else {
                wagons[i] = people + currWagon;
                people = 0;
                if (wagons[i] < 4) {
                    flag = true;
                }
            }
        } else {
            wagons[i] = 4;
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
    "5",
    "0 2 0 0"
]);

