function solve(arr, sortCrit) {
    result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    arr.forEach(line => {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });


    return result.sort((a, b) => {
        if (typeof a[sortCrit] === 'string') {
            return a[sortCrit].localeCompare(b[sortCrit]);
        }else{
           return  a[sortCrit]-b[sortCrit];
        }
    });
}



console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));