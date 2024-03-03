function loadingBar(percentOfLoading) {
  let percentNumbers = "%".repeat(percentOfLoading / 10);
  let dotsNumbers = ".".repeat(10 - percentNumbers.length);

  if (percentOfLoading === 100) {
    console.log(`100% Complete!`);
    console.log(`[${percentNumbers}]`);
  } else {
    console.log(`${percentOfLoading}% [${percentNumbers}${dotsNumbers}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(80);
