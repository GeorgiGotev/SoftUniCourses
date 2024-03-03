// function solve(area, vol, input) {
//     let data = JSON.parse(input);

//     let result=[];

//         data.forEach(element => {
//             let areaOBJ=Math.abs(area.call(element));
//             let volumeObj=(vol.call(element));
//             result.push({area: areaOBJ, volume: volumeObj});
//         });

//         return result;
// }


function solve(area, vol, input) {
    let data = JSON.parse(input);

    function calc(obj) {
        let areaCalc=Math.abs(area.call(obj));
        let volumeCalc=Math.abs(vol.call(obj));
        return {area: areaCalc, volume:volumeCalc}
    }
    console.log(data.map(calc));
}





function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));