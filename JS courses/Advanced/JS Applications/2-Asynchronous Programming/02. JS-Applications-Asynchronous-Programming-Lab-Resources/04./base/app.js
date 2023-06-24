window.addEventListener('load', () => {
    let main = document.querySelector('main');
    let recipeURL = `http://localhost:3030/jsonstore/cookbook/recipes`;

    async function loadRecipes() {
        main.innerHTML="";
        let res = await fetch(recipeURL);
        let data = await res.json();
        let arr = Object.values(data);
        renderRecipes(arr);
    }
    loadRecipes();

    function renderRecipes(arr) {
        arr.map((r) => {
            let article = document.createElement('article');
            article.setAttribute('class', 'preview');

            article.addEventListener('click', () => {
                async function getDetails() {
                    let detailsURL = `http://localhost:3030/jsonstore/cookbook/details/${r._id}`;
                    let res = await fetch(detailsURL);
                    let data = await res.json();
                    
                    main.innerHTML = `
                        <article>
                        <h2>${r.name}</h2>
                        <div class="band">
                            <div class="thumb">
                                <img src="${r.img}">
                            </div>
                            <div class="ingredients">
                                <h3>Ingredients:</h3>
                                <ul>
                                    ${data.ingredients
                                        .map((e) => `<li>${e}</li>`)
                                        .join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="description">
                            <h3>Preparation:</h3>
                            ${data.steps.map((s) => `<p>${s}</p>`).join('')}
                        </div>
                    </article>
                        `;
                }
                getDetails();
            });
            let div1 = document.createElement('div');
            div1.setAttribute('class', 'title');

            let h2 = document.createElement('h2');
            h2.textContent = r.name;

            let div2 = document.createElement('div');
            div2.setAttribute('class', 'small');

            let img = document.createElement('img');
            img.src = r.img;

            div2.appendChild(img);
            div1.appendChild(h2);
            article.appendChild(div1);
            article.appendChild(div2);
            main.appendChild(article);
        });
    }
});
