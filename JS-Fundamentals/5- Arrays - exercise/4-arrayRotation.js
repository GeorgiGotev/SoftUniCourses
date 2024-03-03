function arrayRotation(arr, num) {
  let newArr = [];
  let rotations = num % arr.length;
  for (let i = 0; i < rotations; i++) {
    let currNum = arr.shift();
    arr.push(currNum);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
