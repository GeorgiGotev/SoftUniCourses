function getPersonInfoString(imput){
    //read the input
    let firstName=imput[0];
    let lastName=imput[1];
    let age=imput[2];
    let town=imput[3];
    //get the result
    let result = (`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}`)
    console.log(result);

}

getPersonInfoString(["Georgi", "Gotev", 29, "Burgas"]);