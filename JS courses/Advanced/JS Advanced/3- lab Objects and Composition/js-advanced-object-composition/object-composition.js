// let car = {
//     model: 'BMW',
//     year: 2010,
//     facelift: true,
//     honk: function () {
//         console.log(`${this.model}: Beep beep!`);
//     },
//     owner: {
//         name: 'Pesho',
//         age: 30,
//     }
// };

// // car['honk']();

// // Print nested value
// console.log(car.owner.name);
// console.log(car.owner['name']);
// console.log(car['owner']['name']);

// // Nested destructuring
// let { owner } = car;

// // Renaming in destructuring
// let { owner: person } = car;

function test() {
    let obj = {
        name: 'Georgi',
        age: '30',
        title: 'Manager',
        doing: function walk(){
            console.log(`${this.name}, ${this.title} going to work`);
         },
         going: function (str){
            console.log(`${str}, ${this.title} going to work`);
        }
    }
    

    return obj;
}

let proba=test();
proba.doing('Pesho');
