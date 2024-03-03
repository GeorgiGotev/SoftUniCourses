function solve(arr){
    let result=[];
    arr.forEach(number => {
        if(number<0){
            result.unshift(number);
        }else{
            result.push(number);
        }
    });
    console.log(result.join('\n'));
}
solve([7, -2, 8, 9]);