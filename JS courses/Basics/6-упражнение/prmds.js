function prmds(input) {
  let n = Number(input[0]);
  let prinCurrentLine = "";
  let current = 1;
  let isBigger = false;

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      prinCurrentLine += current + " ";
      current++;
    }
    console.log(prinCurrentLine);
    prinCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}

prmds([7]);
