function distinctArray(input) {
  result = [input[0]];

  for (let i = 0; i < input.length; i++) {
    if (!result.includes(input[i])) {
      result.push(input[i]);
    }
  }

  console.log(result.join(" "));
}
distinctArray([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);
