function calcDeposit(imput){

    let depositSum = Number (imput[0]);
    let depositPeriod = Number (imput[1]);
    let annualInterestRate = Number (imput[2]);
    let finalSum = depositSum + depositPeriod * ((depositSum * annualInterestRate /100)/12);

    console.log(finalSum)

}

calcDeposit(["200 ", "3 ", "5.7 "]);