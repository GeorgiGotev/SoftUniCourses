function solve(arr, rotations) {

    // better to make let newArr=[]; , then to modify 
    for(let i=0;i<rotations;i++){
        let lastItem=arr.pop();
        arr.unshift(lastItem)

        // arr.unshift(arr.pop());
        
    }
    console.log(arr.join(' '));
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);