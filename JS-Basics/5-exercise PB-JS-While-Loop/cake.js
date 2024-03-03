function cake(input) {
  let index = 0;
  let a = Number(input[index]);
  index++;
  let b = Number(input[index]);
  index++;
  let cakeSize = a * b;
  let command = input[index];
  index++;
  let pcs = 0;

  while (command !== "STOP") {
    let curPsc = Number(command);
    pcs += curPsc;

    if (pcs > cakeSize) {
      console.log(`No more cake left! You need ${pcs - cakeSize} pieces more.`);
      break;
    }
    command = input[index++];
  }
  if (command === "STOP") {
    console.log(`${cakeSize - pcs} pieces are left.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
