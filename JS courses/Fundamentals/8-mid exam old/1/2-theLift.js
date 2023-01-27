function theLift(arr) {
    let firstEl = arr.shift();
    let people = Number(firstEl);
    let wagons = arr[0].split(' ').map(Number);
    let newWagons = []
    for (let i = 0; i < wagons.length; i++) {
        let currWagon = wagons[i];
        for (let i = 1; i <= 4; i++) {
            if (people === 0) {
                newWagons.push(currWagon);
                break;
            }
            people--;
            currWagon += 1;
            if (currWagon === 4) {
                newWagons.push(currWagon);
                break;
            }
        }

    }
    if ((newWagons[newWagons.length - 1]) < 4) {
        console.log(`The lift has empty spots!`);
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(newWagons.join(' '));

}
theLift([
    "3",
    "0 2 0"
]);