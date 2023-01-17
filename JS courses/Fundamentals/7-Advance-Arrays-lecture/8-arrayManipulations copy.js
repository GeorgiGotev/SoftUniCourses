function arrayManipulations(arrayWithCommands) {
  let resultArray = arrayWithCommands.shift().split(" ").map(Number);

  for (let i = 0; i < arrayWithCommands.length; i++) {
    let [command, num1, num2] = arrayWithCommands[i].split(" ");
    num1 = Number(num1);
    num2 = Number(num2);

    switch (command) {
      case "Add":
        resultArray.push(num1);
        break;

      case "Remove":
        for (let i = 0; i < resultArray.length; i++) {
          if (resultArray.includes(num1)) {
            index = resultArray.indexOf(num1);
            resultArray.splice(index, 1);
          }
        }
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
