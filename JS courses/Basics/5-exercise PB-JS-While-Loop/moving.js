function moving(input) {
  let index = 0;
  let width = input[index++];
  let length = input[index++];
  let height = input[index++];
  let cubicMeters = width * length * height;
  let command = input[index++];
  let cubicMetersFromBoxes = 0;

  while (command !== "Done") {
    let currBox = Number(command);

    cubicMetersFromBoxes += currBox;

    if (cubicMeters < cubicMetersFromBoxes) {
      console.log(
        `No more free space! You need ${
          cubicMetersFromBoxes - cubicMeters
        } Cubic meters more.`
      );
      break;
    }
    command = input[index++];
  }
  if (command === "Done") {
    console.log(`${cubicMeters - cubicMetersFromBoxes} Cubic meters left.`);
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
