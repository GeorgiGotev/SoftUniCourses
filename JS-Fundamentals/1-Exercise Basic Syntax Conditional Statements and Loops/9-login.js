function login(array) {
  for (let i = 1; i < array.length; i++) {
    let currPass = array[i];

    result = "";

    for (let j = currPass.length - 1; j >= 0; j--) {
      result += currPass[j];
    }
    if (array[0] !== result) {
      if (i > 3) {
        console.log(`User ${array[0]} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${array[0]} logged in.`);
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
