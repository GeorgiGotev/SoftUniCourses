function rotateArray(array) {
  let rotations = Number(array[array.length - 1]);
  let newArr = [];
  for (let j = 0; j < array.length - 1; j++) {
    newArr.push(array[j]);
  }
  for (let i = 0; i < rotations; i++) {
    let current = newArr.pop();
    newArr.unshift(current);
  }
  console.log(newArr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
