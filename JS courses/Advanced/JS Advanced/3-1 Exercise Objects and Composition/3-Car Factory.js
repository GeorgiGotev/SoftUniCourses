// function solve(order){

//     let car={
//         model:order.model,
//         engine:{
//             power: power(order.power),
//             volume: volume(order.power),
//         },
//         carriage:{
//             type:order.carriage,
//             color:order.color,
//         },
//         wheels: makeWheels(order.wheelsize)
//     };

//     function power(hp){
//         if (hp <= 90) {
//           return  90;
//         } else if (hp <= 120) {
//           return 120;
//         } else if (hp <= 200) {
//           return 200;
//         }
//     };


//      function volume(hp){
//         if (hp <= 90) {
//           return  1800;
//         } else if (hp <= 120) {
//           return 2400;
//         } else if (hp <= 200) {
//           return 3500;
//         }
//     };

//     function makeWheels(wheelSize) {
//         let newSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;
//         const wheels = new Array(4).fill(newSize);

//         return wheels;
//     }

//     return car;
// }




// let order={ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 };


// solve(order);








// function carFactory(obj) {

//     function createEngine(hp) {
//         const engine = {}
//         if (hp <= 90) {
//             engine.power = 90;
//             engine.volume = 1800;
//         } else if (hp <= 120) {
//             engine.power = 120;
//             engine.volume = 2400;
//         } else if (hp <= 200) {
//             engine.power = 200;
//             engine.volume = 3500;
//         }
//         return engine;
//     }

//     function createCarriage(color, type) {
//         const carriage = { color, type };
//         return carriage;
//     }

//     function makeWheels(wheelSize) {
//         let newSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;
//         const wheels = new Array(4).fill(newSize);
//         return wheels;
//     }
//     console.log( {   //must return
//         model: obj.model,
//         engine: createEngine(obj.power),
//         carriage: createCarriage(obj.color, obj.carriage),
//         wheelsize: makeWheels(obj.wheelsize)
//     })
// }


function carFactory(car) {

    if (car.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
        delete car.power;
    } else if (car.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
        delete car.power;
    } else if (car.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
        delete car.power;
    }

    if (car.carriage === 'coupe') {
        car.carriage = { type: 'coupe', color: car.color };
        delete car.color
    } else if (car.carriage === 'hatchback') {

    }

    if(car.wheelsize%2===0){
        let size=car.wheelsize-1;
        car.wheels= new Array(4).fill(size);
        delete car.wheelsize;
    }else{
        car.wheels= new Array(4).fill(car.wheelsize);
        delete car.wheelsize;
    }

    return(car);
}


carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 18
});


