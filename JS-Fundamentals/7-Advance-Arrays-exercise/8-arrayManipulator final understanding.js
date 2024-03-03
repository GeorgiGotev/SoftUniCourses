function solve(arr, commands) {
  for (let i = 0; i < commands.length; i++) {
    let commandsSplit = commands[i].split(" ");
    let command = commandsSplit[0];
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
      let index = parseInt(commandsSplit[1]);
      let element = parseInt(commandsSplit[2]);
      arr.splice(index, 0, element);
    }
    function addMany() {
      let index = parseInt(commandsSplit[1]);
      let addition = commandsSplit.slice(2).map(Number);
      arr.splice(index, 0, ...addition);
    }
    function contains() {
      let element = parseInt(commandsSplit[1]);
      console.log(arr.indexOf(element));
    }
    function remove() {
      let index = parseInt(commandsSplit[1]);
      arr.splice(index, 1);
    }
    function shift() {
      let position = parseInt(commandsSplit[1]);
      for (let a = 0; a < position; a++) {
        let first = arr.shift();
        arr.push(first);
      }
    }
    function sumPairs() {
      if (arr.length % 2 !== 0) {
        arr.push(0);
      }
      let newer = [];
      let sum = 0;
      for (let i = 0; i < arr.length; i += 2) {
        sum = arr[i] + arr[i + 1];
        newer.push(sum);
      }
      arr = newer;
    }
    function print() {
      console.log(`[ ${arr.join(", ")} ]`);
    }
  }
}
solve([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
