function solve(arr) {
    let el = arr.map((row) =>
        row
            .trim()
            .split('|')
            .map(cell => cell.trim())
    )
        .map(row =>
            row.filter(x => x !== ''));

    let headers = el[0];
    let data = el.slice(1);

    let output = data.map((el) => {

        let outputObj = {}

        headers.map((header, i) => {
            let tryParseTown = Number(el[i]);
            outputObj[header] = isNaN(tryParseTown) ? el[i] : Number(tryParseTown.toFixed(2));
        });
        return outputObj;
    });
    console.log(JSON.stringify(output));


}






// function solve(arr){
//     let result=[];

//     arr.slice(1).forEach(town => {   
//        let [skipped,townName, latitude, longitude ]=town.split(/\s*\|\s*/);
//        latitude=Number(latitude).toFixed(2);
//        latitude=Number(latitude);
//        longitude=Number(longitude).toFixed(2);
//        longitude=Number(longitude);

//         result.push({Town:townName, Latitude:latitude, Longitude:longitude});
//     });
//     output=JSON.stringify(result);
//     console.log(output);
// }




solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

);