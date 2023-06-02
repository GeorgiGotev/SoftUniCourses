window.addEventListener('load', solve);

function solve() {
    let inputFields = Array.from(
        document.querySelectorAll('.container-text input')
    );
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', ticketPreview);
    let ul = document.querySelector('.ticket-info-list');
    let confirmUl = document.querySelector('.confirm-ticket');
    let mainDiv = document.getElementById('main');
    let body = document.querySelector('body');

    function ticketPreview(e) {
        e.preventDefault();
        // if (
        //     inputFields[0].value === '' ||
        //     inputFields[1].value === '' ||
        //     inputFields[2].value === '' ||
        //     inputFields[3].value === '' ||
        //     inputFields[4].value === ''
        // ) {
        //     return;
        // }
        let check=inputFields.some(element => element.value==='');
        if(check){
            return
        }
            
        let firstName = inputFields[0].value;
        let lastName = inputFields[1].value;
        let peopleNumber = inputFields[2].value;
        let date = inputFields[3].value;
        let days = inputFields[4].value;

        inputFields.forEach((button) => {
            button.value = '';
        });

        createTicket(firstName, lastName, peopleNumber, date, days);

        function createTicket(firstName, lastName, peopleNumber, date, days) {
            let li = document.createElement('li');
            li.setAttribute('class', 'ticket');
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = `Name: ${firstName} ${lastName}`;
            let p1 = document.createElement('p');
            p1.textContent = `From date: ${date}`;
            let p2 = document.createElement('p');
            p2.textContent = `For ${days} days`;
            let p3 = document.createElement('p');
            p3.textContent = `For ${peopleNumber} people`;

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);

            let btn1 = document.createElement('button');
            btn1.setAttribute('class', 'edit-btn');
            btn1.textContent = 'Edit';
            btn1.addEventListener('click', moveBackForEdit);
            function moveBackForEdit(e) {
                let parent = e.target.parentElement;
                inputFields[0].value = firstName;
                inputFields[1].value = lastName;
                inputFields[2].value = peopleNumber;
                inputFields[3].value = date;
                inputFields[4].value = days;

                parent.remove();
                nextBtn.disabled = false;
            }

            let btn2 = document.createElement('button');
            btn2.setAttribute('class', 'continue-btn');
            btn2.textContent = 'Continue';
            btn2.addEventListener('click', confirmTicket);
            function confirmTicket(e) {
                let parent = e.target.parentElement;
                confirmUl.appendChild(parent);
                btn1.remove();
                btn2.remove();
                let btnConfirm = document.createElement('button');
                btnConfirm.setAttribute('class', 'confirm-btn');
                btnConfirm.textContent = 'Confirm';
                btnConfirm.addEventListener('click', finishOrder);
                function finishOrder(e) {
                    mainDiv.remove();
                    let h1 = document.createElement('h1');
                    h1.setAttribute('id', 'thank-you');
                    h1.textContent = 'Thank you, have a nice day!';

                    let btnReturn = document.createElement('button');
                    btnReturn.textContent = 'Back';
                    btnReturn.setAttribute('id', 'back-btn');

                    body.appendChild(h1);
                    body.appendChild(btnReturn);

                    btnReturn.addEventListener('click', reload);

                    function reload() {
                        location.reload();
                    }
                }

                let btnCancel = document.createElement('button');
                btnCancel.setAttribute('class', 'cancel-btn');
                btnCancel.textContent = 'Cancel';
                btnCancel.addEventListener('click', returnToStart);
                function returnToStart(e) {
                    let parent = e.target.parentElement;
                    nextBtn.disabled = false;
                    parent.remove();
                }

                li.appendChild(btnConfirm);
                li.appendChild(btnCancel);
            }

            li.appendChild(article);
            li.appendChild(btn1);
            li.appendChild(btn2);
            ul.appendChild(li);
            nextBtn.disabled = true;
        }
    }
}
