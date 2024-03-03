function worldSwimmingRecord(input) {
  let recordTime = Number(input[0]);
  let distanceM = Number(input[1]);
  let speedPerM = Number(input[2]);

  let timeForDistance = distanceM * speedPerM;
  let delay = (Math.floor(distanceM / 15) * 12.5);
  let totalTime = timeForDistance + delay;

  if(recordTime>totalTime){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  } else{
    console.log(`No, he failed! He was ${(totalTime-recordTime).toFixed(2)} seconds slower.`);
  }
}



worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
;
