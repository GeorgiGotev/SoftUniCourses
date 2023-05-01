// function solve(a, b) {
//     let biggestNum = Math.max(a, b);
//     let result = [];
    
//     for (let i = biggestNum; i >= 1; i--) {
//         if (a % i === 0 && b % i === 0) {
//             result.push(i);
//         }
//     }
//     console.log(Math.max(...result));
// }
// solve(15, 5);

function solve(a, b) {
    let biggestNum = Math.max(a, b);

    for (let i = biggestNum; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            console.log(i);
            break;
        }
    }
}
solve(15, 5);