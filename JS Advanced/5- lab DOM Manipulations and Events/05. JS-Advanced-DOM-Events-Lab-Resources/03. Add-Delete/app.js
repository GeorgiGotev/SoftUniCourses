// let inputElement = document.getElementById('newItemText');
// let buttonElement = document.querySelector('input[type="button"]');

// buttonElement.disabled = true;

// inputElement.addEventListener('keyup', s);

// function s() {
//     if (inputElement.value === '') {
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.disabled = false;
//     }
// }

function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');

    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);

    let itemForDelete = document.createElement('a');
    itemForDelete.href = '#';
    itemForDelete.textContent = '[Delete]';
    liElement.appendChild(itemForDelete);

    // itemForDelete.addEventListener('click', (e) => {
    //     e.currentTarget.parentElement.remove();
    // });

    itemForDelete.addEventListener('click', ()=> liElement.remove()); // second variation of remove

    inputElement.value = '';

    // s();
}


