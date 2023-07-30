function solve() {
  let input = document.getElementById('text').value;
  let optionInput = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
 
  const toPascal = (text) => 
    text
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join('');
  
  
  const toCamel = (text) => {
    text=toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
}
  if(optionInput==='Pascal Case'){
    resultElement.textContent=toPascal(input);
  }else if(optionInput==='Camel Case'){
    resultElement.textContent=toCamel(input);
  }else{
    resultElement.textContent='Error!'
  }
}


//   let input=document.getElementById('text');
//   let optionInput=document.getElementById('naming-convention');
//   let resultElement=document.getElementById('result');

//   let result=[];

//   if(optionInput.value==='Pascal Case'){
//    let arr=input.value.split(' ').map((w) =>w[0].toUpperCase() + w.substring(1).toLowerCase()).join('');
//     result.push(arr);
//     resultElement.textContent=result;
//   }
//   if(optionInput.value==='Camel Case'){
//     let arr=input.value.split(' ');
//     let firstWord=arr[0].toLowerCase();
//     result.push(firstWord);
//     for (let i=1;i<arr.length;i++) {
      
//       let line=arr[i].substring(0,1).toUpperCase();
    
//       let res=line+arr[i].substring(1).toLowerCase();
//       result.push(res);
//     }
//     resultElement.textContent=result.join('');
//   }
//   if(optionInput.value!=='Camel Case' && optionInput.value!=='Pascal Case'){
//     resultElement.textContent='Error!';
//   }
