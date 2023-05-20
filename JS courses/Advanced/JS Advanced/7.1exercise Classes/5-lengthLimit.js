class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    decrease(action) {
        this.innerLength-=action;
        if (this.innerLength<0) {
            return this.innerLength = 0;
        }
    }
    increase(action) {
        return this.innerLength += action;
    }
    toString() {
        let text = this.innerString;
        
        if(text.length>this.innerLength){
            text=text.slice(0,this.innerLength)+'.'.repeat(3);
        }
       
        return text
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test 
test.decrease(3);
console.log(test.toString()); // Te... 
test.decrease(5);
console.log(test.toString()); // ... 
test.increase(4);
console.log(test.toString()); // Test
// console.log(test.toString());