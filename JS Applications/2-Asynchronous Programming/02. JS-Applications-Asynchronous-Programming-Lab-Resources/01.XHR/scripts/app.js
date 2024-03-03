let button=document.querySelector('button');

function loadRepos() {
    // e.preventDefault()

    let result = document.getElementById('res');
    let url = `https://api.github.com/users/testnakov/repos`;
    let req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            result.textContent = req.responseText;
        }
    });
    if(button.textContent==='Load Repos'){
      button.textContent='Hide Repos';
      result.style.display='block'
    }else{
      button.textContent='Load Repos';
      result.style.display='none';
    }

    req.open('GET', url);
    req.send();
}
