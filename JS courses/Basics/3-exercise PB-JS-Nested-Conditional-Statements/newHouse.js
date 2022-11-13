function newHouse(input) {
  let flower = input[0];
  let num = Number(input[1]);
  let budg = Number(input[2]);
  let sum = 0;

  switch (flower) {
    case "Roses":
      sum = num * 5;
      if (num > 80) {
        sum = sum - sum * 0.1;
      }
      break;
    case "Dahlias":
      sum = num * 3.8;
      if (num > 90) {
        sum = sum - sum * 0.15;
      }
      break;
    case "Tulips":
      sum = num * 2.8;
      if (num > 80) {
        sum = sum - sum * 0.15;
      }
      break;
    case "Narcissus":
      sum = num * 3;
      if (num < 120) {
        sum = sum + sum * 0.15;
      }
      break;
    case "Gladiolus":
      sum = num * 2.5;
      if (num < 80) {
        sum = sum + sum * 0.2;
      }
      break;
  }
  if (sum > budg) {
    console.log(
      `Not enough money, you need ${(sum - budg).toFixed(2)} leva more.`
    );
  } else {
    console.log(
      `Hey, you have a great garden with ${num} ${flower} and ${(
        budg - sum
      ).toFixed(2)} leva left.`
    );
  }
}
newHouse(["Tulips", "88", "260"]);
