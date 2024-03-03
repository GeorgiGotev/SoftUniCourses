window.addEventListener('load', solve);

function solve() {
    let inputFields = Array.from(
        document.querySelectorAll('.form-wrapper input,select,textarea')
    ).slice(0, -1);
    let submitButton = document.getElementById('form-btn');
    let inProgressTab = document.getElementById('in-progress');
    let count = document.getElementById('progress-count');
    let finished = document.getElementById('finished');
    let clear = document.getElementById('clear-btn');

    submitButton.addEventListener('click', submitInputs);

    function submitInputs(e) {
        let checkForEmpty = inputFields.some((x) => x.value === '');
        if (checkForEmpty) {
            return;
        }

        let firstName = inputFields[0].value;
        let lastName = inputFields[1].value;
        let age = inputFields[2].value;
        let gender = inputFields[3].value;
        let information = inputFields[4].value;

        let li = document.createElement('li');
        li.setAttribute('class', 'each-line');

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = `${firstName} ${lastName}`;
        let p1 = document.createElement('p');
        p1.textContent = `${gender}, ${age}`;
        let p2 = document.createElement('p');
        p2.textContent = `Dish description: ${information}`;
        let btn1 = document.createElement('button');
        btn1.textContent = 'Edit';
        btn1.setAttribute('class', 'edit-btn');
        btn1.addEventListener('click', backForEdit);

        let btn2 = document.createElement('button');
        btn2.textContent = 'Mark as complete';
        btn2.setAttribute('class', 'complete-btn');
        btn2.addEventListener('click', completePost);

        clear.addEventListener('click', clearFunc);

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        li.appendChild(article);
        li.appendChild(btn1);
        li.appendChild(btn2);
        inProgressTab.appendChild(li);
        count.textContent++;

        inputFields.forEach((element) => {
            element.value = '';
        });
        
        function backForEdit(e) {
            inputFields[0].value = firstName;
            inputFields[1].value = lastName;
            inputFields[2].value = age;
            inputFields[3].value = gender;
            inputFields[4].value = information;
            count.textContent--;
            li.remove();
        }

        function completePost(e) {
            finished.appendChild(li);
            count.textContent--;
            btn1.remove();
            btn2.remove();
        }
        function clearFunc(e) {
            li.remove();
        }
    }
}
