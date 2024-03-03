function distinctArray(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        input.delate(j);
        i = 0;
      }
    }
  }
  console.log(input.join(" "));
}
distinctArray([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);
