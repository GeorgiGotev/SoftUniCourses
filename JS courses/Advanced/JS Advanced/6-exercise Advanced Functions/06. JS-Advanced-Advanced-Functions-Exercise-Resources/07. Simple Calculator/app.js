function calculator() {
    let firstEl = '';
    let secondEl = '';
    let resultEl = '';
    let result = {
        init(a, b, c) {
            firstEl = document.querySelector(a);
            secondEl = document.querySelector(b);
            resultEl = document.querySelector(c);
        },
        add() {
            resultEl.value = Number(firstEl.value) + Number(secondEl.value);
        },
        subtract() {
            resultEl.value = Number(firstEl.value) - Number(secondEl.value);
        },
    };
    return result;
}
const calculate = calculator();
console.log(calculate.init('#num1', '#num2', '#result'));

// function calculator() {
//     const html = { s1: "", s2: "", output: "" }

//     function calc(a, b, sign) {
//         const signs = { "+": (a, b) => a + b, "-": (a, b) => a - b }

//         return signs[sign](Number(a), Number(b))
//     }

//     return {
//         init: (a, b, c) => {
//             html.s1 = document.querySelector(a)
//             html.s2 = document.querySelector(b)
//             html.output = document.querySelector(c)
//         },
//         add: () =>
//             (html.output.value = calc(html.s1.value, html.s2.value, "+")),
//         subtract: () =>
//             (html.output.value = calc(html.s1.value, html.s2.value, "-")),
//     }
// }
