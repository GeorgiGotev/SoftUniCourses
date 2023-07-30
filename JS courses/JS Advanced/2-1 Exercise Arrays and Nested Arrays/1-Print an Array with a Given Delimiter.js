function solve(arr,delimiter){
    // let output=''
    // for(let i=0;i<arr.length;i++){
    //     if(i!==arr.length-1){
    //     output+=`${arr[i]}${delimiter}`;
    //     }else{
    //         output+=`${arr[i]}`
    //     }
    // }
    // console.log(output);

    return(arr.join(delimiter))
}
solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);