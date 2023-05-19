// function rectangle(width,height,color){
//     return{
//         width,
//         height,
//         color: color.slice(0,1).toUpperCase() + color.slice(1),
//         calcArea: ()=>{
//             return width*height;
//         }
//     }
// }

function rectangle(width, height, color) {
    let resultObj = {
        width,
        height,
        color: color.slice(0, 1).toUpperCase() + color.slice(1),
        calcArea: function () {
            
            return this.width * this.height
            
        }
        
    }

    return resultObj
}




let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
