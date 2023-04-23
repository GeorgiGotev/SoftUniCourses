function addItem() {
    let itemsList=document.getElementById('items');
    let input=document.getElementById('newItemText');
   
    let liElement=document.createElement('li');  //create li elements;
    liElement.textContent=input.value; // new elements = input field;
    itemsList.appendChild(liElement); // append the li elements to the ul list with id items;
    input.value = ''; // to clear the input after submit button is clicked
}