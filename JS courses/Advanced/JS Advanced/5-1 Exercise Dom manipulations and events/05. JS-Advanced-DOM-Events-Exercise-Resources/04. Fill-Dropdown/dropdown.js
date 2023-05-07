function addItem() {
    let textInputElement=document.querySelector('#newItemText');
    let valueInputElement=document.querySelector('#newItemValue');
    let selectMenu=document.querySelector('#menu');

    let optionElement=document.createElement('option');
    
    optionElement.textContent=textInputElement.value;
    optionElement.value=valueInputElement.value;

    selectMenu.appendChild(optionElement);

    textInputElement.value='';
    valueInputElement.value='';
}