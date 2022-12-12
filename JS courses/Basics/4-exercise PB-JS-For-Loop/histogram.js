function histogram(input) {
  let num = Number(input[0]);

  p1 = 0;
  p2 = 0;
  p3 = 0;
  p4 = 0;
  p5 = 0;

  for (let i = 1; i <= num; i++) {
    let currNum = Number(input[i]);
    if (currNum < 200) {
      p1++;
    } else if (currNum < 400) {
      p2++;
    } else if (currNum < 600) {
      p3++;
    } else if (currNum < 800) {
      p4++;
    } else if (currNum >= 800) {
      p5++;
    }
  }
  console.log(((p1 / num) * 100).toFixed(2) + "%");
  console.log(((p2 / num) * 100).toFixed(2) + "%");
  console.log(((p3 / num) * 100).toFixed(2) + "%");
  console.log(((p4 / num) * 100).toFixed(2) + "%");
  console.log(((p5 / num) * 100).toFixed(2) + "%");
}
histogram(["3", "1", "2", "999"]);
