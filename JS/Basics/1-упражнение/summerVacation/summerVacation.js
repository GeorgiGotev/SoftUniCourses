function summerVacation(imput){

    let pages=Number(imput[0]);
    let pagesPerHour=Number(imput[1]);
    let days=Number(imput[2]);
    let totalTimes= pages / pagesPerHour;
    let hoursPerDays= totalTimes / days;

    console.log(hoursPerDays);


}

summerVacation(["212 ", "20 ", "2 "]);