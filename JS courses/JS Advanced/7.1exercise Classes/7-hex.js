class Hex {
    constructor(value) {
        this.number = value
    }
    toString() {
       
        return '0x' + this.number.toString(16).toUpperCase();
    }
    valueOf() {
        return this.number
    }
    plus(num) {
        if (typeof num === 'object') {
            let result = this.number + num.number
            return (new Hex(result));
        } else {
            let result = this.number + num
            return (new Hex(result));
        }
    }
    minus(num) {
        if (typeof num === 'object') {
            let result = this.number - num.number;
            return (new Hex(result));   
        } else {
            let result = this.number - num;
            return (new Hex(result));
        }
    }
    parse(str) {
        return parseInt(str,16)

    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
