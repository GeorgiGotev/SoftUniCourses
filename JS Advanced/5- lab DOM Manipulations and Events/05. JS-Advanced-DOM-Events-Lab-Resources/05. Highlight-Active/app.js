// function focused() {
//     let boxElement = Array.from(document.querySelectorAll('div div input'));

//     boxElement.forEach(element => {
//         element.addEventListener('focus', (e) => {
//             e.target.parentNode.classList.add('focused');
//         });
//         element.addEventListener('blur', (e) => {
//             e.target.parentNode.classList.remove('focused')
//         });
//     });
// }

function focused() {
    let boxElement = Array.from(document.querySelectorAll('div div input'));

    boxElement.forEach(element => {
        element.addEventListener('focus', () => {
            element.parentElement.classList.add('focused');
        });
        
        element.addEventListener('blur', () => {
            element.parentElement.classList.remove('focused')
        });
    });
}   