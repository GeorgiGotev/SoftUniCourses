function arrayManipulator(arrays, commands) {
  for (let i = 0; i < commands.length; i++) {
    finalArr = arrays;

    let [command, num1, num2] = commands[i].split(" ");
    num1 = Number(num1);
    num2 = Number(num2);

    switch (command) {
      case "add":
        add(num1, num2);
        break;
      case "addMany":
        let currCommand = commands[i].split(" ");
        let index = currCommand[1];
        for (let i = 2; i < currCommand.length; i++) {
          arrays.splice(index + i - 2, 0, currCommand[i]);
        }
        break;
      case "contains":
        contains(num1);
        break;
      case "remove":
        remove(num1);
        break;
      case "shift":
        shift(num1);
        break;
      case "sumPairs":
        sumPairs(finalArr);

        break;
      case "print":
        print(finalArr);
        break;
    }
  }
  function add(num1, num2) {
    finalArr.splice(num1, 0, num2);
  }
  function contains(num1) {
    if (finalArr.includes(num1)) {
      let index = finalArr.indexOf(num1);
      console.log(index);
    } else {
      console.log("-1");
    }
  }
  function remove(num1) {
    finalArr.splice(num1, 1);
  }
  function shift(num1) {
    for (let i = 0; i < num1; i++) {
      let currNum = arrays.shift();
      finalArr.push(currNum);
    }
  }
  function sumPairs(finalArr) {
    let newArr = [];
    let length = finalArr.length;
    for (let i = 0; i < finalArr.length; i += 2) {
      let sum = 0;
      let currNum = finalArr[i];
      let nextNum = Number(finalArr[i + 1]);
      sum += currNum + nextNum;
      newArr.push(sum);
    }
    if (length % 2 !== 0) {
      newArr.push(finalArr[finalArr.length - 1]);
    }
    finalArr = newArr;
    arrays = newArr;
  }
  function print(arrays) {
    console.log(`[ ${arrays.join(", ")} ]`);
  }
}
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
