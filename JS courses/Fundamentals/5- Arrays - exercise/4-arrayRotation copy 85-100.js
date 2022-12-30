function arrayRotation(arr, num) {
  let newArr = [];
  for (let i = num; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < num; i++) {
    let currNum = arr[i];
    newArr.push(currNum);
  }
  console.log(newArr.join(" "));
}
arrayRotation([2, 4, 15, 31], 5);
