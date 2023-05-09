function solve(arr) {
    let result ='';
    arr.forEach((num, i) => {
    
        if (i % 2 === 0) {
            result+=`${num} `;
        }
    });
    console.log(result);;
}
solve(['20', '30', '40', '50', '60']);
