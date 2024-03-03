function generateReport() {
    let checkBoxesElements =Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let outputElement=document.getElementById('output');
    let rowElements=Array.from(document.querySelectorAll('tbody tr'));
    let res=[];

rowElements.forEach(row=> {
    let tableRow=row.cells;
    let result={};
    checkBoxesElements.forEach((box, i) => {
        if(box.checked){
            result[box.name]=tableRow[i].textContent;
        } 
    });
    res.push(result)
});

outputElement.value=JSON.stringify(res);
}