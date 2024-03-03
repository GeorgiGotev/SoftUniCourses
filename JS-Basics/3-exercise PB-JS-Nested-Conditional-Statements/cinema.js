function cinema(input) {
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);
  let numberOfPpl = c * r;
  let income = 0;

  switch (type) {
    case "Premiere":
      income = (numberOfPpl * 12).toFixed(2);
      console.log(`${income} leva`);
      break;
    case "Normal":
      income = (numberOfPpl * 7.5).toFixed(2);
      console.log(`${income} leva`);
      break;
    case "Discount":
      income = (numberOfPpl * 5).toFixed(2);
      console.log(`${income} leva`);
      break;
  }
}
cinema(["Premiere", "10", "12"]);
