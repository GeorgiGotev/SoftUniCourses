function dictionary(input) {
  let result = {};

  for (const el of input) {
    let inputObj = JSON.parse(el);
    result = Object.assign(result, inputObj);
  }

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
  // sorted is an array now and we need for of loop

  for (const key of sorted) {
    // we have sorted "keys" and iterate them... result or the value is over the new sorted keys
    console.log(`Term: ${key} => Definition: ${result[key]}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
