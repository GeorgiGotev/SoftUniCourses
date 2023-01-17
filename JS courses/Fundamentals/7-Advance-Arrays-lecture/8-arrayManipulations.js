function arrayManipulations(arrayWithCommands) {
  let resultArray = arrayWithCommands.shift().split(" ").map(Number);

  for (let i = 0; i < arrayWithCommands.length; i++) {
    let splittedCurrent = arrayWithCommands[i].split(" ");
    let command = splittedCurrent[0];
    let num1 = Number(splittedCurrent[1]);
    let num2 = Number(splittedCurrent[2]);

    switch (command) {
      case "Add":
        resultArray.push(num1);
        break;

      case "Remove":
        resultArray = resultArray.filter((x) => x !== num1);
        break;

      case "RemoveAt":
        resultArray.splice(num1, 1);
        break;

      case "Insert":
        resultArray.splice(num2, 0, num1);
        break;
    }
  }

  console.log(resultArray.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
