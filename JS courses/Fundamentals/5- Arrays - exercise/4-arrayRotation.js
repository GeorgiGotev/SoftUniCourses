function arrayRotation(arr, num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    let currNum = arr.shift();
    arr.push(currNum);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
