function puppyCare(input) {
  let foodKilograms = Number(input[0]);
  let foodGrams = foodKilograms * 1000;
  let index = 1;
  let comand = input[index];
  index++;

  let sum = 0;
  while (comand !== "Adopted") {
    let num = Number(comand);
    sum += num;
    comand = input[index];
    index++;
  }
  if (foodGrams >= sum) {
    console.log(`Food is enough! Leftovers: ${foodGrams - sum} grams.`);
  } else if (sum > foodGrams) {
    console.log(`Food is not enough. You need ${sum - foodGrams} grams more.`);
  }
}
puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
