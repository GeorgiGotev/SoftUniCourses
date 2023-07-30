function solution(num) {
    function sum(a, b) {
        return a + b;
    }

    
    return sum.bind(this, num);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
