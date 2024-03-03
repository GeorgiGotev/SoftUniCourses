// window.addEventListener('load', solution);

let main = document.getElementById('main');
async function solution() {
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    let res = await fetch(url);
    let data = await res.json();


    data.forEach((e) => {
        let divAccordion = document.createElement('div');
        divAccordion.setAttribute('class', 'accordion');
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'head');
        let span = document.createElement('span');
        span.textContent = e.title;
        let button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.setAttribute('id', `${e._id}`);
        button.textContent = 'More';
        button.addEventListener('click', toggle)
        
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'extra');
        let p = document.createElement('p');
        

        div1.appendChild(span);
        div1.appendChild(button);
        div2.appendChild(p);
        divAccordion.appendChild(div1);
        divAccordion.appendChild(div2);
        main.appendChild(divAccordion);
    });
}

// main.addEventListener('click', toggle)
async function toggle(e) {
    
    let urlDetails = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    let resDetails = await fetch(urlDetails+e.target.id);
    let dataDetails = await resDetails.json();
    let div=e.target.parentElement.parentElement.children[1];
    
    let p=e.target.parentElement.parentElement.children[1].children[0];
    p.textContent=dataDetails.content;
    

    if ((e.target.textContent === 'More')) {
        e.target.textContent = 'Less';
        div.style.display = 'block';
    } else if(e.target.textContent = 'Less') {
        e.target.textContent = 'More';
        div.style.display = 'none';
    }
}
solution();
