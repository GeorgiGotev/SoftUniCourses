function toggle() {
    let textElement=document.getElementById('extra');
    let buttonElement=document.querySelector('.button');
    
    if(buttonElement.textContent==='More'){
        buttonElement.textContent='Less';
        textElement.style.display='block';
    }else if(buttonElement.textContent==='Less'){
        buttonElement.textContent='More';
        textElement.style.display='none';
    }
}