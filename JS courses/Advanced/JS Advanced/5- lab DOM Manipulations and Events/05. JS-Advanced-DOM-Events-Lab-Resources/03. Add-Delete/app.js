function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');

    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);

    let itemForDelete=document.createElement('a');
    itemForDelete.href='#';
    itemForDelete.textContent='[Delete]';
    liElement.appendChild(itemForDelete);

    itemForDelete.addEventListener('click', (e)=>{
        e.currentTarget.parentElement.remove();
    });
}