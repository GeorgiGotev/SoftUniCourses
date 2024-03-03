function cs(input) {

    let energy = Number(input.shift());
    let counter = 0;

    for(let i=0;i<input.length;i++){
        if(input[i]==='End of battle'){
            console.log(`Won battles: ${counter}. Energy left: ${energy}`);
            break;
        }
        
        if(energy>=input[i]){
        counter++;
        if(counter%3===0){
            energy+=counter;
        }
        energy-=Number(input[i]);
    }else{
        console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            break;
    }
 }
}
cs(["200",
"54",
"14",
"28",
"13",
"End of battle"])





    ;
