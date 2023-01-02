function arrayRotation(arr, num) {
  //let newArr = [];
  for (let i = 0; i < num; i++) {
    let firstElement = arr[0];
    for (let arrMove = 0; arrMove < arr.length; arrMove++) {
      arr[arrMove] = arr[arrMove + 1];
    }
    arr[arr.length - 1] = firstElement;
  }

  console.log(arr.join(" "));
}
arrayRotation([2, 4, 15, 31], 5);
