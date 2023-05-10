function solve(arr,a,b) {
    let result=[];
    let startIndex=arr.indexOf(a);
    let endIndex=arr.indexOf(b);
    for(let i=startIndex;i<=endIndex; i++){
        result.push(arr[i]);
    }
    
    return result;
 
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));