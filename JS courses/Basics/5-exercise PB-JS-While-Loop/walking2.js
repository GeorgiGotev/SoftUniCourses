function walking(input) {
  let index = 0;
  let command = input[index++];
  let totalSteps = 0;

  while (command !== "Going home") {
    let currentSteps = Number(command);
    totalSteps += currentSteps;

    if (totalSteps >= 10000) {
      console.log(`Goal reached! Good job!`);
      console.log(`${totalSteps - 10000} steps over the goal!`);
      break;
    }
    command = input[index++];
  }
  if (command === "Going home") {
    let stepsGoingBack = Number(input[index]);

    totalSteps += stepsGoingBack;
    if (totalSteps >= 10000) {
      console.log(`Goal reached! Good job!`);
      console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
      console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
  }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);
