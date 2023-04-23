function sumTable() {
    let numbersForSum=document.querySelectorAll('td:nth-child(2)')
    let sum=0;

    for(let i=0;i<numbersForSum.length-1;i++){
       sum+=Number(numbersForSum[i].textContent);
    }
    let result=document.getElementById('sum');
    result.textContent=sum;
}