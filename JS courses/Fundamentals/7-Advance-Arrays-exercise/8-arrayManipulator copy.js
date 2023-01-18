function arrayManipulator(arrays, commands) {
  for (let i = 0; i < commands.length; i++) {
    let curr = commands[i].split(" ");
    let command = curr.shift();
    num1 = Number(curr[0]);
    num2 = Number(curr[1]);

    let newArr = [];
    let sum = 0;

    switch (command) {
      case "add":
        arrays.splice(num1, 0, num2);
        break;
      case "addMany":
        let index = num1;
        for (let i = 1; i < curr.length; i++) {
          arrays.splice(index - i - 1, 0, Number(curr[i]));
        }
        break;
      case "contains":
        console.log(arrays.indexOf(num1));
        break;
      case "remove":
        arrays.splice(num1, 1);
        break;
      case "shift":
        for (let i = 0; i < num1; i++) {
          let currNum = arrays.shift();
          arrays.push(currNum);
        }
        break;
      case "sumPairs":
        let length = arrays.length;
        if (length % 2 !== 0) {
          arrays.push(0);
        }
        for (let i = 0; i < arrays.length; i += 2) {
          sum = arrays[i] + arrays[i + 1];
          newArr.push(sum);
        }
        arrays = [...newArr];

        break;
      case "print":
        console.log(`[ ${arrays.join(", ")} ]`);
        break;
    }
  }
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
