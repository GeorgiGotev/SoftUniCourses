function solution(){

    let text='';

    return{
        append(str){
            text+=str;
        },
        removeStart(n){
            text=text.slice(n);
        },
        removeEnd(n){
            text=text.slice(0, text.length - n);
        },
        print(){
          console.log(text);
        }
        
        
    } 
}


let firstZeroTest = solution();

console.log(firstZeroTest.append('hello'));
console.log(firstZeroTest.append('again'));
console.log(firstZeroTest.removeStart(3));
console.log(firstZeroTest.removeEnd(4));
console.log(firstZeroTest.print());


