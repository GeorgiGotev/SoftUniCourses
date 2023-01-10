function primeNumberChecker(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
    }
  }

  if (flag) {
    console.log(true);
  } else {
    console.log(false);
  }
}
primeNumberChecker(8);
