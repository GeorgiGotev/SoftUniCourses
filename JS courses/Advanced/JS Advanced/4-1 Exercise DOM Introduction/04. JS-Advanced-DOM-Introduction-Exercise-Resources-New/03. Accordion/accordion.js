function toggle() {
    // let textElement=document.getElementById('extra');
    // let buttonElement=document.querySelector('.button');

    // if(buttonElement.textContent==='More'){
    //     buttonElement.textContent='Less';
    //     textElement.style.display='block';
    // }else if(buttonElement.textContent==='Less'){
    //     buttonElement.textContent='More';
    //     textElement.style.display='none';
    // }


    const MORE = 'More';
    const LESS = 'Less';

    const buttonElement = document.querySelector('.button');
    const textElement = document.getElementById('extra');

    buttonElement.textContent = buttonElement.textContent === MORE ? LESS : MORE;
    textElement.style.display = buttonElement.textContent === MORE ? 'none' : 'block';

}