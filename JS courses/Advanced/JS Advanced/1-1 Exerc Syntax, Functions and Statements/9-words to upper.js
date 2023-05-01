function solve(string){
    let pattern=/\w+/gm;
    let result=string.match(pattern);
    console.log(result.join(', ').toUpperCase());
}
solve('Hi, how are you?');