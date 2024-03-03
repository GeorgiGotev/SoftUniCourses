function triangleAreaHeron(a, b, c) {
  let s = 0.5 * (a + b + c);
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}
triangleAreaHeron(2, 3.5, 4);
