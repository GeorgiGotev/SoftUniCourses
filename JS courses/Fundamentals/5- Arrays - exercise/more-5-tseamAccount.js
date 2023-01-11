function tseamAccount(array) {
  let newArr = array[0].split(" ");
  index = 0;
  let command = array[index++];
  while (command !== "Play!") {
    let commandArr = array[index].split(" ");
    let commandComputer = commandArr[0];
    let newGame = commandArr[1];
    switch (commandComputer) {
      case "Install":
        if (!newArr.includes(newGame)) {
          newArr.push(newGame);
        }
        break;

      case "Uninstall":
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] === newGame) {
            newArr.splice(i, 1);
            break;
          }
        }

        break;
      case "Update":
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] === newGame) {
            newArr.splice(i, 1);
            newArr.push(newGame);
            break;
          }
        }
        break;
      case "Expansion":
        let expansion = newGame.split("-");
        let currGame = expansion[0];
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] === currGame) {
            let expandedGame = expansion.join(":");
            newArr.splice(i + 1, 0, expandedGame);
            break;
          }
          break;
        }
    }

    command = array[index++];
  }

  console.log(newArr.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
