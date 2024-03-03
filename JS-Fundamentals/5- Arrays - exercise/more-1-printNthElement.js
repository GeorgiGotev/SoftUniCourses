function printNthElement(array) {
  let newArr = [];
  let arrayStep = Number(array[array.length - 1]);
  for (let i = 0; i < array.length - 1; i += arrayStep) {
    newArr.push(array[i]);
  }

  console.log(newArr.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
