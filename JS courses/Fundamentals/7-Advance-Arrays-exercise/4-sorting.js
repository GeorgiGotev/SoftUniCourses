function sorting(arrayOfNumbers) {
  let result = [];

  let sorted = arrayOfNumbers.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    result.push(sorted.pop());
    result.push(sorted[i]);
  }

  console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
