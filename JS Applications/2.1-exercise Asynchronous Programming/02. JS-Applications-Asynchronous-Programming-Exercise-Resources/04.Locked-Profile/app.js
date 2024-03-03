async function lockedProfile() {
    let main = document.getElementById('main');
    let profile=document.querySelector('.profile');
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    let res = await fetch(url);
    let data = await res.json();

    Object.values(data).forEach((p) => {
        let copyProfile=profile.cloneNode(true);
        copyProfile.children[8].value=p.username;
        copyProfile.children[9].children[2].value=p.email;
        copyProfile.children[9].children[4].value=p.age;
        
        main.appendChild(copyProfile)
    });
    let divForHide = [...document.querySelectorAll('.profile .user1Username')];
    divForHide.forEach((element) => {
        element.style.display = 'none';
    });
    main.children[0].remove();

    main.addEventListener('click', showMore)
    function showMore(e) {
        let profile=e.target.parentElement;
        let div=profile.querySelector('.user1Username');
        let radio=e.target.parentElement.querySelector('input[value="unlock"]');
        
        if ((e.target.tagName === 'BUTTON')) {
            if(radio.checked){
                if(e.target.textContent==='Show more'){
                    e.target.textContent='Hide it'
                    div.style.display='block'
                }else{
                    e.target.textContent='Show more'
                    div.style.display='none'
                }
            }
        }
    }
}
