function generateSequence(n, k) {
    const sequence = [1]; 
    for (let i = 1; i < n; i++) {
      const sum = sequence.slice(-k).reduce((acc, curr) => acc + curr, 0);
      sequence.push(sum);
    }
    return sequence; 
  }
  generateSequence(8,2)

  function generateSequence(n, k) {
    const sequence = [1]; // start the sequence with 1
  
    for (let i = 1; i < n; i++) {
        sum=0;
    //   const lastKNumbers = sequence.slice(-k);
        let lastKNumbers=sequence.slice(sequence.length-k);
      for (const num of lastKNumbers) {
        sum+=num;
      }
        sequence.push(sum);
    }
  
   return (sequence);
  }
  console.log(generateSequence(8,2));