function solve(arr) {
    let biggestOne=0;
    let result=[];
    for (const num of arr) {
        if(num>=biggestOne){
            biggestOne=num;
            result.push(num);
        }
    }
    return result;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);