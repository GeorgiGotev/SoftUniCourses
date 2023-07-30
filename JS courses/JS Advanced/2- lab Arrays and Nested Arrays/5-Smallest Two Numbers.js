// function solve(arr){
//     let sorted=arr.sort((a,b)=>a-b);
//     let result=[];
//     for(let i=0;i<2;i++){
//         result.push(sorted[i]);
//     }
//     console.log(result.join(' '));
// }
// solve([30, 15, 50, 5]);

function solve(arr){
    let sorted=arr.sort((a,b)=>a-b);
    
    console.log(sorted.slice(0,2).join(' '));
}
solve([30, 15, 50, 5]);