function validate() {
    let pattern=/[a-z]+@[a-z]+\.[a-z]+/gm;
    let inputEl=document.getElementById('email');
   
    inputEl.addEventListener('change', changeFunc);
    function changeFunc(){
        if(!pattern.exec(inputEl.value)){
            inputEl.classList.add('error');
        }else{
            inputEl.classList.remove('error')
        }
    }
}