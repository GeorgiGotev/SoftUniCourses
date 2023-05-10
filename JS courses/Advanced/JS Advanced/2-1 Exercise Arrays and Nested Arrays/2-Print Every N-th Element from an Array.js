function solve(arr,n){
//     let result=[];
//     for(let i=0;i<arr.length;i+=n){
//         result.push(arr[i]);
//     }
//    return (result);

    return result=arr.filter((x,i)=>{
        return i%n==0;
    });
    
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));