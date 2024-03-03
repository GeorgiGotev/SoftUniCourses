function mergeArrays(firstArr, secondArr) {
  return firstArr
    .map((el, i) =>
      i % 2 == 0 ? Number(el) + Number(secondArr[i]) : el + secondArr[i]
    )
    .join(" - ");
}
console.log(
  mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"])
);
