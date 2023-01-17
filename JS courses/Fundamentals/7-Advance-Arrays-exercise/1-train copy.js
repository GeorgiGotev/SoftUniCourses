function train(array) {
  let wagonsWithPpl = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    add(command);
    fillingWagons(command);
  }

  function add(command) {
    if (command.includes("Add")) {
      wagonsWithPpl.push(command[1]);
    }
  }
  function fillingWagons(command) {
    if (command[0] !== "Add") {
      for (let i = 0; i < wagonsWithPpl.length; i++) {
        if (wagonsWithPpl[i] + Number(command) <= maxCapacity) {
          wagonsWithPpl[i] += Number(command);
          break;
        }
      }
    }
  }

  console.log(wagonsWithPpl.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
