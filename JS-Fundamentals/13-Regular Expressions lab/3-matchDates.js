function matchDates(arr){
    let text=arr[0];
    let regex=/\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let iterator=text.matchAll(regex);
    for (const line of iterator) {
        console.log(`Day: ${line.groups.day}, Month: ${line.groups.month}, Year: ${line.groups.year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);


// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937
