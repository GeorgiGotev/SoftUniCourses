function solve(arr, commands) {
  for (let i = 0; i < commands.length; i++) {
    let splited = commands[i].split(" ");
    let command = splited[0];
    if (command === "add") {
      add();
    } else if (command === "addMany") {
      addMany();
    } else if (command === "contains") {
      contains();
    } else if (command === "remove") {
      remove();
    } else if (command === "shift") {
      shift();
    } else if (command === "sumPairs") {
      sumPairs();
    } else if (command === "print") {
      print();
      break;
    }
    function add() {
      let index = parseInt(splited[1]);
      let element = parseInt(splited[2]);
      arr.splice(index, 0, element);
    }
    function addMany() {
      let index = parseInt(splited[1]);
      for (let j = splited.length - 1; j >= 2; j--) {
        let element = parseInt(splited[j]);
        arr.splice(index, 0, element);
      }
    }
    function contains() {
      let element = parseInt(splited[1]);
      console.log(arr.indexOf(element));
    }
    function remove() {
      let index = parseInt(splited[1]);
      arr.splice(index, 1);
    }
    function shift() {
      let position = parseInt(splited[1]);
      for (let a = 0; a < position; a++) {
        let first = arr.shift();
        arr.push(first);
      }
    }
    function sumPairs() {
      arr = arr
        .map((e, i, arr) =>
          i < arr.length - 1 ? (arr[i] += arr[i + 1]) : (arr[i] = arr[i])
        )
        .filter((e, i) => i % 2 === 0);
    }
    function print() {
      console.log(`[ ${arr.join(", ")} ]`);
    }
  }
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
