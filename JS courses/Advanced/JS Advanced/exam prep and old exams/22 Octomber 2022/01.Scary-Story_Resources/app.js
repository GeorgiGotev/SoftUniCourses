window.addEventListener('load', solve);

function solve() {
    let inputFields = Array.from(
        document.querySelectorAll('.inner-wrap input,select,textarea')
    );
    let publishButton = document.getElementById('form-btn');
    let previewList = document.getElementById('preview-list');
    let main = document.getElementById('main');

    publishButton.addEventListener('click', moveToPreview);

    function moveToPreview(e) {
        let check = inputFields.some((x) => x.value === '');
        if (check) {
            return;
        }
        let firstName = inputFields[0].value;
        let lastName = inputFields[1].value;
        let age = inputFields[2].value;
        let title = inputFields[3].value;
        let genre = inputFields[4].value;
        let story = inputFields[5].value;

        createArticle(firstName, lastName, age, title, genre, story);

        inputFields.forEach((element) => {
            element.value = '';
        });
    }
    function createArticle(firstName, lastName, age, title, genre, story) {
        let li = document.createElement('li');
        li.setAttribute('class', 'story-info');

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = `Name: ${firstName} ${lastName}`;
        let p1 = document.createElement('p');
        p1.textContent = `Age: ${age}`;
        let p2 = document.createElement('p');
        p2.textContent = `Title: ${title}`;
        let p3 = document.createElement('p');
        p3.textContent = `Genre: ${genre}`;
        let p4 = document.createElement('p');
        p4.textContent = story;

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        let btn1 = document.createElement('button');
        btn1.textContent = 'Save Story';
        btn1.setAttribute('class', 'save-btn');
        btn1.addEventListener('click', (e) => {
            main.remove();
            let mainFinal = document.createElement('div');
            mainFinal.setAttribute('id', 'main');

            let h1 = document.createElement('h1');
            h1.textContent = 'Your scary story is saved!';
            mainFinal.appendChild(h1);
            document.querySelector('body').appendChild(mainFinal);
        });

        let btn2 = document.createElement('button');
        btn2.textContent = 'Edit Story';
        btn2.setAttribute('class', 'edit-btn');
        btn2.addEventListener('click', (e) => {
            inputFields[0].value = firstName;
            inputFields[1].value = lastName;
            inputFields[2].value = age;
            inputFields[3].value = title;
            inputFields[4].value = genre;
            inputFields[5].value = story;
            li.remove();
            publishButton.disabled = false;
        });

        let btn3 = document.createElement('button');
        btn3.textContent = 'Delete Story';
        btn3.setAttribute('class', 'delete-btn');
        btn3.addEventListener('click', (e) => {
          li.remove();
          publishButton.disabled=false;
        });

        li.appendChild(article);
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        previewList.appendChild(li);
        publishButton.disabled = true;
    }
}
