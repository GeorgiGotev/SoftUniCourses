window.addEventListener('load', solve);

function solve() {
    // debugger
    let inputFields = Array.from(
        document.querySelectorAll('.inner-wrap input,select')
    );
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addGem);
    let ul = document.getElementById('preview-list');
    let collectionField = document.getElementById('collection');

    function addGem() {
        inputFields.forEach((inputElement) => {
            if (inputElement.value === '') {
                return;
            }
        });

        createGem(
            inputFields[0].value,
            inputFields[1].value,
            inputFields[2].value,
            inputFields[3].value,
            inputFields[4].value
        );
        inputFields.forEach((inputElement) => {
            inputElement.value = '';
        });
        addBtn.disabled = true;
    }

    function createGem(name, color, carat, price, type) {
        let li = document.createElement('li');
        li.setAttribute('class', 'gem-info');
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = name;
        let p1 = document.createElement('p');
        p1.textContent = `Color: ${color}`;
        let p2 = document.createElement('p');
        p2.textContent = `Carats: ${carat}`;
        let p3 = document.createElement('p');
        p3.textContent = `Price: ${price} $`;
        let p4 = document.createElement('p');
        p4.textContent = `Type: ${type}`;

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        let btn1 = document.createElement('button');
        btn1.textContent = 'Save to Collection';
        btn1.setAttribute('class', 'save-btn');
        btn1.addEventListener('click', saveFunc);
        let btn2 = document.createElement('button');
        btn2.textContent = 'Edit information';
        btn2.setAttribute('class', 'edit-btn');
        btn2.addEventListener('click', editFunc);
        let btn3 = document.createElement('button');
        btn3.textContent = 'Cancel';
        btn3.setAttribute('class', 'cancel-btn');
        btn3.addEventListener('click', cancelFunc);

        li.appendChild(article);
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);

        ul.appendChild(li);
    }
    function cancelFunc() {
        addBtn.disabled = false;
        let elementForRemove = ul.children;
        elementForRemove[0].remove();
    }
    function saveFunc() {
        let liCollection = document.createElement('li');
        let pCollection = document.createElement('p');
        let forOutput = ul.querySelector('article').children;

        pCollection.setAttribute('class', 'collection-item');
        pCollection.textContent = `${forOutput[0].textContent} - ${forOutput[1].textContent}/ ${forOutput[2].textContent}/ ${forOutput[3].textContent.slice(0,-2)}$/ ${forOutput[4].textContent}`;

        liCollection.appendChild(pCollection);
        collectionField.appendChild(liCollection);
    }
    function editFunc() {
       let listToEdit=ul.querySelector('article').children;
            inputFields[0].value=listToEdit[0].textContent
            inputFields[1].value=listToEdit[1].textContent.split('Color: ')[1];
            inputFields[2].value=listToEdit[2].textContent.split('Carats: ')[1];
            inputFields[3].value=listToEdit[3].textContent.split('Price: ')[1].slice(0,-2);
            inputFields[4].value=listToEdit[4].textContent.split('Type: ')[1];
        let elementForRemove = ul.children;
        // console.log(elementForRemove);
        elementForRemove[0].remove();
        addBtn.disabled = false;
    }
}





   