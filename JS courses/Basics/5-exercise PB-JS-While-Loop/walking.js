function walking(input) {
  let index = 0;
  let allSteps = 0;
  let command = input[index++];

  while (allSteps < 10000 && command !== "Going home") {
    let currSteps = Number(command);
    allSteps += currSteps;
    command = input[index++];
  }
  if (command === "Going home") {
    command = input[index];
    let currSteps = Number(command);
    allSteps += currSteps;
  }
  if (allSteps >= 10000) {
    console.log(`Goal reached! Good job!`);
    console.log(`${allSteps - 10000} steps over the goal!`);
  } else {
    console.log(`${10000 - allSteps} more steps to reach goal.`);
  }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);
