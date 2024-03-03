function addOrRemove(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "add":
        newArr.push(i + 1);
        break;
      case "remove":
        newArr.pop();
        break;
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addOrRemove(["add", "add", "remove", "add", "add"]);
