function sorting(arrayOfNumbers) {
  let result = [];
  let final = [];
  let sorted = arrayOfNumbers.sort((a, b) => a - b);
  // with slice we can copy our array, because sort will modify it????
  for (let i = 0; i < sorted.length; i++) {
    result.push(sorted[sorted.length - 1 - i]);
    result.push(sorted[i]);
  }
  for (let i = 0; i < result.length / 2; i++) {
    final.push(result[i]);
  }

  console.log(final.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
