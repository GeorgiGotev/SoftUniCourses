function solve(speed, type) {
    let limit = 0;
    let status;
    switch (type) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }
    if ((speed - limit) <= 20) {
        status = 'speeding';
    } else if ((speed - limit) <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    speed <= limit ? console.log(`Driving ${speed} km/h in a ${limit} zone`) :
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);;

}
solve(40, 'city');