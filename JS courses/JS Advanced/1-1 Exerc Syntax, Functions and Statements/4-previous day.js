function solve(y, m, d) {
    let inputDate=new Date(y,m-1,d);
    let previousDay=new Date(inputDate);
    previousDay.setDate(previousDay.getDate()-1);
    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth()+1}-${previousDay.getDate()}`); 
}
solve(2016, 10, 1);


//2016-9-29