function solve(){
    class Person{
        constructor(first,last,age,mail){
            this.firstName=first;
            this.lastName=last;
            this.age=age;
            this.email=mail;
        }
        toString(){
           return(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
        }
    }
    let result=[]

    result.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    result.push(new Person('SoftUni'));
    result.push(new Person('Stephan', 'Johnson', 25));
    result.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    
    return(result);
}
solve()






