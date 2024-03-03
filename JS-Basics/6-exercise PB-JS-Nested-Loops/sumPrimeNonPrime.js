function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  index++;

  sumIsPrime = 0;
  sumIsNoPrime = 0;

  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log(`Number is negative.`);
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;

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
    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumIsPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumIsNoPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
