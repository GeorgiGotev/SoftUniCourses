function arrayManipulator(arrays, commands) {
  for (let i = 0; i < commands.length; i++) {
    let splitted = commands[i].split(" ");
    let command = splitted.shift();
    let num1 = Number(splitted[0]);
    let num2 = Number(splitted[1]);
    let newArr = [];
    let sum = 0;

    switch (command) {
      case "add":
        add(num1, num2);
        break;
      case "addMany":
        let index = splitted[0];
        let addition = splitted.slice(1).map(Number);
        arrays.splice(index, 0, ...addition);

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
        let length = arrays.length;
        if (length % 2 !== 0) {
          arrays.push(0);
        }
        for (let i = 0; i < arrays.length; i += 2) {
          sum = arrays[i] + arrays[i + 1];
          newArr.push(sum);
        }
        arrays = newArr;

        break;
      case "print":
        print(arrays);
        break;
    }
  }
  function add(num1, num2) {
    arrays.splice(num1, 0, num2);
  }
  function contains(num1) {
    if (arrays.includes(num1)) {
      let index = arrays.indexOf(num1);
      console.log(index);
    } else {
      console.log("-1");
    }
  }
  function remove(num1) {
    arrays.splice(num1, 1);
  }
  function shift(num1) {
    for (let i = 0; i < num1; i++) {
      let currNum = arrays.shift();
      arrays.push(currNum);
    }
  }
  // function sumPairs(arrays) {
  //   let length = arrays.length;
  //   if (length % 2 !== 0) {
  //     arrays.push(0);
  //   }
  //   for (let i = 0; i < arrays.length; i += 2) {
  //     sum = arrays[i] + arrays[i + 1];
  //     newArr.push(sum);
  //   }
  //   arrays = [...newArr];
  // }
  function print(arrays) {
    console.log(`[ ${arrays.join(", ")} ]`);
  }
}
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
