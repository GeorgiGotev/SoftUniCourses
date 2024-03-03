function concatenateDate(imput) {
    let firstName=(imput[0]);
    let lastName=(imput[1]);
    let age=(imput[2]);
    let town=(imput[3]);
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);

}

concatenateDate(["Georgi", "Gotev", 29, "Burgas"]);