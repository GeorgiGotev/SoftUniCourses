function sumPrimeNonPrime(input) {
  let index = 0;
  let comand = input[index];
  index++;

  sumIsPrime = 0;
  sumIsNoPrime = 0;

  while (comand !== "stop") {
    let num = Number(comand);

    if (num < 0) {
      console.log(`Number is negative.`);
      comand = input[index];
      index++;
      continue;
    }

    isPrime = true;

    for (let del = 2; del < num; del++) {
      if (num % del === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      sumIsPrime += num;
    } else {
      sumIsNoPrime += num;
    }
    comand = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumIsPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumIsNoPrime}`);
}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
