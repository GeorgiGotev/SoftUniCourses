

function solve() {

    let resultInput = document.getElementById('result');
    let inputElement = document.getElementById('input');

    let toMenu = document.getElementById('selectMenuTo');
    let firstOption = document.querySelector('#selectMenuTo option');
    let binary = document.createElement('option');
    let hex = document.createElement('option');

    hex.textContent = 'Hexadecimal';
    hex.value = 'hexadecimal';
    firstOption.appendChild(hex);

    binary.textContent = 'Binary';
    binary.value = 'binary';
    toMenu.appendChild(binary);

    document.querySelector('button').addEventListener('click', convert)
    function convert() {
        if (toMenu.value === 'binary') {
            resultInput.value = Number(inputElement.value).toString(2);
        }
        if (toMenu.value === 'hexadecimal') {
            resultInput.value = Number(inputElement.value).toString(16).toUpperCase();
        }
    }
}