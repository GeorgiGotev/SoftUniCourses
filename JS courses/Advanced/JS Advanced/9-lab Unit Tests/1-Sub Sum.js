function solve(input,start,end){
    let sum=0;
    if(!Array.isArray(input)){
        return NaN;
    }
    if(input.length===0){
        return 0;
    }
    if(start<0){
        start=0;
    }
    if(end>input.length){
        end=input.length-1;
    }
    for(let i=start;i<=end;i++){
        sum+=Number(input[i]);
    }
   return sum

}
solve([10, 20, 30, 40, 50, 60], 3, 300)