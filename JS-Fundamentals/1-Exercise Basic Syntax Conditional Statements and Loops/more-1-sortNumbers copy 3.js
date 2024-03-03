function sortNumbers(num1, num2, num3) {
  let arr = [num1, num2, num3];
  let sorted=arr.sort((a,b)=>b-a);
  console.log(sorted.join('\n'));

}
sortNumbers(0, 0, 2);
