function generateSequence(n, k) {
    const sequence = [1]; // start the sequence with 1
  
    for (let i = 1; i < n; i++) {
      // calculate the sum of the previous k elements
      const sum = sequence.slice(-k).reduce((acc, curr) => acc + curr, 0);
      sequence.push(sum); // add the sum to the sequence
    }
  
    return sequence; // return the generated sequence
  }
  generateSequence(8,2)