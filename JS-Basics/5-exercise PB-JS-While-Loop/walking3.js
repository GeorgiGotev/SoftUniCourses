function walking(input) {
  let index = 0;
  let totalSteps = 0;

  while (true) {
    let command = input[index++];
    let currentSteps = Number(command);

    if (command === "Going home") {
      command = input[index];
      currentSteps = Number(command);

      totalSteps += currentSteps;
      if (totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - 10000} steps over the goal!`);
      } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
      }
      break;
    }

    if (totalSteps >= 10000) {
      console.log(`Goal reached! Good job!`);
      console.log(`${totalSteps - 10000} steps over the goal!`);
      break;
    }
    totalSteps += currentSteps;
  }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);
