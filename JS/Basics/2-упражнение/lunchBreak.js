function lunchBreak(input){
    let name = input[0];
    let timeForE = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1/8;
    let freeTime = breakTime * 1/4;

    let finalTimeForE = breakTime-lunchTime-freeTime;

    if(finalTimeForE>=timeForE){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(finalTimeForE-timeForE)} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeForE-finalTimeForE)} more minutes.`);
    }


}

lunchBreak(["Teen Wolf",
"48",
"60"]);

