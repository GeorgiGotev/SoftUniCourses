function commonElements(firstArr, secondArr) {
  let newArr = [];
  for (let el of firstArr) {
    for (let el2 of secondArr) {
      if (el === el2) {
        console.log(el);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
