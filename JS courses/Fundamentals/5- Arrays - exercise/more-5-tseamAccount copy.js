function tseamAccount(array) {
  let newArr = array.shift().split(" ");
  index = 0;
  let command = array[index];
  while (command !== "Play!") {
    let [commandComputer, newGame] = array[index].split(" ");

    switch (commandComputer) {
      case "Install":
        if (!newArr.includes(newGame)) {
          newArr.push(newGame);
        }
        break;

      case "Uninstall":
        if (newArr.includes(newGame)) {
          let gameIndex = newArr.indexOf(newGame);
          newArr.splice(gameIndex, 1);
        }
        break;

      case "Update":
        if (newArr.includes(newGame)) {
          let gameIndex = newArr.indexOf(newGame);
          newArr.splice(gameIndex, 1);
          newArr.push(newGame);
        }
        break;

      case "Expansion":
        let expansion = newGame.split("-");
        if (newArr.includes(expansion[0])) {
          let expandedGame = expansion.join(":");
          let index = newArr.indexOf(expansion[0]);
          newArr.splice(index + 1, 0, expandedGame);
        }
        break;
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
