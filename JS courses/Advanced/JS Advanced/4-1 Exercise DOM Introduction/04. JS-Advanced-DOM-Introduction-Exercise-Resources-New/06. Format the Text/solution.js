function solve() {
  let inputElement = document.getElementById('input').value;
  let output = document.getElementById('output');

  let inputArr = inputElement.split('.').filter((p) => p.length > 0);

  // for (let i = 0; i < input.length; i += 3) {
  //   let arr = [];
   
  //   for (let y = 0; y < 3; y++) {
  //     if (input[i + y]) {
  //       arr.push(input[i + y]);
  //     }
  //   }
  //   let result = arr.join('. ') + '.';
    
  //   output.innerHTML += `<p>${result}</p>`;
  // }

  while(inputArr.length>0){  // better!!!!!!!
    let text = inputArr.splice(0,3).map(x=>x + '.'); // or down one;
    let p=document.createElement('p');
    p.textContent=text;    // or .join('. ') + '.';
    output.appendChild(p);
  }

}