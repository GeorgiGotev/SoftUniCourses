function solve(arr) {
    // let biggestOne=0;
    // let result=[];
    // for (const num of arr) {
    //     if(num>=biggestOne){
    //         biggestOne=num;
    //         result.push(num);
    //     }
    // }
    // return result;



    let biggest = 0;
    
    const output = arr.reduce((acc, currNum) => {
        if (currNum >= biggest) {
            biggest = currNum;
          
            acc.push(currNum)
            return acc
        }
        return acc
    }, []);
    console.log(output);
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