function validate() {
   let pattern=/[a-z]+@[a-z]+\.[a-z]+/gm;
   let inputField=document.getElementById('email');
   
    inputField.addEventListener('change', changeClass);
    function changeClass(){
        if(!pattern.exec(inputField.value)){
        inputField.setAttribute('class', 'error');
    }else{
        inputField.removeAttribute('class', 'error')
    }
   }
}