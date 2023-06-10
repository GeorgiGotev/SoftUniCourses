window.addEventListener('load', solve);

function solve() {
    let inputFieldsArr = Array.from(
        document.querySelectorAll('.container-text input')
    );
    let nextBtn = document.getElementById('next-btn');
    let ulListForAttach = document.querySelector('.info-list');
    let ulConfirm=document.querySelector('.confirm-list');
    nextBtn.addEventListener('click', goToReservationInfo);
    function goToReservationInfo(e) {
        e.preventDefault();
        let firstName = inputFieldsArr[0].value;
        let lastName = inputFieldsArr[1].value;
        let checkIn = inputFieldsArr[2].value;
        let checkOut = inputFieldsArr[3].value;
        let numberOfGuests = inputFieldsArr[4].value;

        if (
            inputFieldsArr.some((x) => x.value === '') ||
            new Date(checkIn) >= new Date(checkOut)
        ) {
            return;
        }
        createReservation(
            firstName,
            lastName,
            checkIn,
            checkOut,
            numberOfGuests
        );

        function createReservation(
            firstName,
            lastName,
            checkIn,
            checkOut,
            ppl
        ) {
            let li = document.createElement('li');
            li.setAttribute('class', 'reservation-content');
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = `Name: ${firstName} ${lastName}`;
            let p1 = document.createElement('p');
            p1.textContent = `From date: ${checkIn}`;
            let p2 = document.createElement('p');
            p2.textContent = `To date: ${checkOut}`;
            let p3 = document.createElement('p');

            p3.textContent = `For ${ppl} people`;

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);

            li.appendChild(article);
            ulListForAttach.appendChild(li);

            let btn1 = document.createElement('button');
            btn1.textContent = 'Edit';
            btn1.setAttribute('class', 'edit-btn');

            btn1.addEventListener('click', edit);

            function edit(e) {
                let parent = e.target.parentElement;
                inputFieldsArr[0].value=firstName;
                inputFieldsArr[1].value=lastName;
                inputFieldsArr[2].value=checkIn;
                inputFieldsArr[3].value=checkOut;
                inputFieldsArr[4].value=ppl;

               parent.remove();
               nextBtn.disabled=false;
            }

            let btn2 = document.createElement('button');
            btn2.textContent = 'Continue';
            btn2.setAttribute('class', 'continue-btn');
            btn2.addEventListener('click', confirmFunc);
            function confirmFunc(e){
                ulConfirm.appendChild(li)
                
                btn1.textContent='Confirm';
                btn1.setAttribute('class', 'confirm-btn');

                btn1.addEventListener('click', finishOrder);

                function finishOrder(e){
                    nextBtn.disabled=false;
                    let parent=e.target.parentElement;
                    let h1=document.getElementById('verification');
                    h1.setAttribute('class', 'reservation-confirmed');
                    h1.textContent='Confirmed.'
                    inputFieldsArr.forEach((element) => {
                        element.value = '';
                    });

                    parent.remove();
                }

                btn2.textContent='Cancel';
                btn2.setAttribute('class','cancel-btn');
                btn2.addEventListener('click', backToStart);
                function backToStart(e){
                    nextBtn.disabled=false;
                    let parent=e.target.parentElement;
                    let h1=document.getElementById('verification');
                    h1.setAttribute('class', 'reservation-cancelled');
                    h1.textContent='Cancelled.'


                    parent.remove();
                }
            }

            li.appendChild(btn1);
            li.appendChild(btn2);

            inputFieldsArr.forEach((element) => {
                element.value = '';
            });
            nextBtn.disabled=true;
        }
    }
}
