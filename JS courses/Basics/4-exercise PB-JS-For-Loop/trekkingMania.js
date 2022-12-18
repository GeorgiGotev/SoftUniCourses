function trekkingMania(input) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let numOfGrp = Number(input[0]);
  let sumOfAllPpl = 0;

  for (let i = 1; i <= numOfGrp; i++) {
    let currGrp = Number(input[i]);
    sumOfAllPpl += currGrp;

    if (currGrp <= 5) {
      p1 += currGrp;
    } else if (currGrp <= 12) {
      p2 += currGrp;
    } else if (currGrp <= 25) {
      p3 += currGrp;
    } else if (currGrp <= 40) {
      p4 += currGrp;
    } else if (currGrp >= 41) {
      p5 += currGrp;
    }
  }
  console.log(((p1 / sumOfAllPpl) * 100).toFixed(2) + "%");
  console.log(((p2 / sumOfAllPpl) * 100).toFixed(2) + "%");
  console.log(((p3 / sumOfAllPpl) * 100).toFixed(2) + "%");
  console.log(((p4 / sumOfAllPpl) * 100).toFixed(2) + "%");
  console.log(((p5 / sumOfAllPpl) * 100).toFixed(2) + "%");
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
