function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index++];

  let sumPrime = 0;
  let sumNoPrime = 0;

  while (command !== "stop") {
    let num = Number(command);
    if (num < 0) {
      console.log("Number is negative.");
      command = input[index++];
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
      sumPrime += num;
    } else {
      sumNoPrime += num;
    }
    command = input[index++];
  }

  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNoPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
