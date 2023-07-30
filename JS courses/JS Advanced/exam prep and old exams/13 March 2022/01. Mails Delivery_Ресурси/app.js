function solve() {
    let inputFields = Array.from(
        document.querySelectorAll('.addMails input,textarea')
    );
    let ulListMails = document.querySelector('#list');
    let ulSendMails = document.querySelector('.sent-list');
    let ulDelete = document.querySelector('.delete-list');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addToListOfMails);

    function addToListOfMails(e) {
        e.preventDefault();
        let check = inputFields.some((x) => x.value === '');
        if (check) {
            return;
        }

        let emailField = inputFields[0].value;
        let titleField = inputFields[1].value;
        let messageField = inputFields[2].value;

        let li = document.createElement('li');

        let firstH4 = document.createElement('h4');
        firstH4.textContent = `Title: ${titleField}`;

        let secondH4 = document.createElement('h4');
        secondH4.textContent = `Recipient Name: ${emailField}`;

        let span = document.createElement('span');
        span.textContent = messageField;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let firstBtn = document.createElement('button');
        firstBtn.type = 'submit';
        firstBtn.setAttribute('id', 'send');
        firstBtn.textContent = 'Send';

        firstBtn.addEventListener('click', sendFunc);
        function sendFunc(e) {
            // e.preventDefault();
            e.target.parentElement.parentElement.remove();
            let li = document.createElement('li');
            let firstSpan = document.createElement('span');
            firstSpan.textContent = `To: ${emailField}`;
            let secondSpan = document.createElement('span');
            secondSpan.textContent = `Title: ${titleField}`;
            let div = document.createElement('div');
            div.setAttribute('class', 'btn');
            let button = document.createElement('button');
            button.type = 'submit';
            button.textContent = 'Delete';
            button.setAttribute('class', 'delete');
            button.addEventListener('click', deleteFunc);

            li.appendChild(firstSpan);
            li.appendChild(secondSpan);
            li.appendChild(div);
            div.appendChild(button);

            ulSendMails.appendChild(li);
        }

        let secondBtn = document.createElement('button');
        secondBtn.type = 'submit';
        secondBtn.setAttribute('id', 'delete');
        secondBtn.textContent = 'Delete';
        secondBtn.addEventListener('click', deleteFunc);

        function deleteFunc(e) {
            // e.preventDefault();
            e.target.parentElement.parentElement.remove();
            let li = document.createElement('li');
            let firstSpan = document.createElement('span');
            firstSpan.textContent = `To: ${emailField}`;
            let secondSpan = document.createElement('span');
            secondSpan.textContent = `Title: ${titleField}`;

            li.appendChild(firstSpan);
            li.appendChild(secondSpan);
            ulDelete.appendChild(li);
        }

        li.appendChild(firstH4);
        li.appendChild(secondH4);
        li.appendChild(span);
        div.appendChild(firstBtn);
        div.appendChild(secondBtn);
        li.appendChild(div);
        ulListMails.appendChild(li);

        inputFields[0].value = '';
        inputFields[1].value = '';
        inputFields[2].value = '';
    }

    const resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', resetFunc);

    function resetFunc(e) {
        e.preventDefault();
        let check = inputFields.some((x) => x.value === '');
        if (check) {
            return;
        }
        inputFields[0].value = '';
        inputFields[1].value = '';
        inputFields[2].value = '';
    }
}
solve();
