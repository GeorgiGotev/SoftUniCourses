function architect (imput){
    let name=(imput[0]);
    let projects=(imput[1]);
    let hours=projects*3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}

architect(["Georgi", 4]);

