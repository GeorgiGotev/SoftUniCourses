let username = document.getElementById('username');
let repoName = document.getElementById('repo');
let commitsUl = document.getElementById('commits');

window.addEventListener('load', () => {
    username.value = '';
    repoName.value = '';
});

async function loadCommits() {
    let url = `https://api.github.com/repos/${username.value}/${repoName.value}/commits`;
    try {
        
        commitsUl.replaceChildren();
        let res = await fetch(url);
        let data = await res.json();
        if(res.status==200){
            data.forEach((element) => {
                let li = document.createElement('li');
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                commitsUl.appendChild(li);
            });
        }else{
            throw new Error(res.status);
        }
        
    } catch (error) {
        commitsUl.replaceChildren();
        let li = document.createElement('li');
        li.textContent = `${error} (Not Found)`
        commitsUl.appendChild(li);
    }
}
