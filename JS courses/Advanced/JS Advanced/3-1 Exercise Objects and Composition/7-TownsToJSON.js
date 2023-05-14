function solve(arr){
    let result=[];
   
    arr.slice(1).forEach(town => {   
       let [skipped,townName, latitude, longitude ]=town.split(/\s*\|\s*/);
       latitude=Number(latitude).toFixed(2);
       latitude=Number(latitude);
       longitude=Number(longitude).toFixed(2);
       longitude=Number(longitude);
        
        result.push({Town:townName, Latitude:latitude, Longitude:longitude});
    });
    output=JSON.stringify(result);
    console.log(output);
}
solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']

);