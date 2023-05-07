function lockedProfile() {
        let buttons=Array.from(document.querySelectorAll('button'));

        buttons.forEach(button => {
           button.addEventListener('click', function changeInfo(e){
            let radio=e.target.parentElement.querySelector('input[value="unlock"]');
           if(radio.checked){
            if(e.target.textContent==='Show more'){
            e.target.parentElement.querySelector('div').style.display='block';
            e.target.textContent='Hide it';
        }else{
            e.target.parentElement.querySelector('div').style.display='none'
            e.target.textContent='Show more'
        }
           }
           });
        });
}