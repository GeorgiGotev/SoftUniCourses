function pyramids(input) {
  let n = Number(input[0]);
  let curr = 1;
  let flag = false;
  let result = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (curr > n) {
        flag = true;
        break;
      }

      result += curr + " ";
      curr++;
    }

    console.log(result);
    result = "";
    if (flag) {
      break;
    }
  }
}
pyramids(["15"]);
