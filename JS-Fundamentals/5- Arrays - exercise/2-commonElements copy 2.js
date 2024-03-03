function commonElements(firstArr, secondArr) {
  let newArr = [];
  for (let el of firstArr) {
    newArr = firstArr.filter((el) => secondArr.includes(el)).join("\n");
  }
  console.log(newArr);
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
