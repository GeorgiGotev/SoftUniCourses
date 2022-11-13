function basketballEquipents (imput){
    let oneYearAll = Number (imput[0]);
    let basketballFoots = oneYearAll - ( oneYearAll * 0.4);
    let basketballWear = basketballFoots - ( basketballFoots * 0.2);
    let basketballBall = basketballWear / 4;
    let basketballAccess = basketballBall / 5;
    let summAll = oneYearAll + basketballAccess + basketballBall + basketballFoots + basketballWear;
    
    console.log(summAll);
}

basketballEquipents(["365 "]);