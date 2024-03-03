class List{
    constructor(){
        this.numbers=[];
        this.size=this.numbers.length
    }
    add(num){
        this.numbers.push(num);
        this.sort();
        this.size++;
    }
    remove(index){
        this.validate(index);
        this.size--;
        this.numbers.splice(index,1);
    }
    get(index){
        this.validate(index);
        return this.numbers[index]
    }
    validate(index){
        if(index<0 || index>=this.numbers.length){
            throw new Error('Error');
        }
    }
    sort(){
     return   this.numbers.sort((a,b)=>a-b);
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list);