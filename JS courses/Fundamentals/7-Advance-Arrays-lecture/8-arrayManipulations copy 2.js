function arrayManipulations(arrayWithCommands) {
  arr = arrayWithCommands.shift().split(" ").map(Number);

  for (let i = 0; i < arrayWithCommands.length; i++) {
    let [command, num1, num2] = arrayWithCommands[i].split(" "); // разделяме масива на отделни части
    num1 = Number(num1);
    num2 = Number(num2);
    switch (command) {
      case "Add":
        add(num1); // подаваме командата с параметър, който ни е по условие
        break;
      case "Remove":
        remove(num1);
        break;
      case "RemoveAt":
        removeAt(num1);
        break;
      case "Insert":
        insert(num1, num2);
        break;
    }
  }
  function add(el) {
    //създаваме функции по алгоритъм даден по условие
    arr.push(el);
  }
  function remove(num) {
    arr = arr.filter((x) => x !== num); // числото X e елемент от масива, и минава през всеки и го сравнява с num
    // преминава и взема числата, които не отговарят на условието( те остават в масива)
  }
  function removeAt(index) {
    //идекса ни е num1 по условие
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  console.log(arr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
