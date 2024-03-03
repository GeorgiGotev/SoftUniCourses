function barcodes(input) {
    let regexName = /([@][#]+)(?<barcodeName>[A-Z][A-Za-z0-9]{4,})([A-Z][@#+])/;
    let regexDigit = /\d/g;
    let n = Number(input.shift());
  

    for (let i = 0; i < n; i++) {
        let line = regexName.exec(input[i]);
        if(line){
            let digits=[]
            if(line.groups.barcodeName.match(regexDigit)){
            for (let iterator of line.groups.barcodeName.match(regexDigit)) {
                digits.push((iterator));
            }
        }
            if(digits.length===0){
                digits='00';
            }else{
                digits=digits.join('')
            }
            console.log(`Product group: ${digits}`);
        }else{
        console.log('Invalid barcode');
    }
}
}
barcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)
;