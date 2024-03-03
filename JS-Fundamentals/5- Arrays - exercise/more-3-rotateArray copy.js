function rotateArray(array) {
  let rotations = Number(array[array.length - 1]);
  array.pop();

  for (let i = 0; i < rotations; i++) {
    array.unshift(array.pop());
  }
  console.log(array.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
