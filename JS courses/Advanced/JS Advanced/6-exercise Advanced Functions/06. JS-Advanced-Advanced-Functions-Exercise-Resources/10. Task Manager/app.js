// function solve() {
//     // console.log("//TODO")
//     const taskField = document.getElementById('task');
//     const descriptionField = document.getElementById('description');
//     const dateField = document.getElementById('date');
//     const addBtn = document.getElementById('add');
//     const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
//     const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
//     const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

//     addBtn.addEventListener('click', addTask);

//     function addTask(e) {
        
//         e.preventDefault();
//         let task = taskField.value;
//         let description = descriptionField.value;
//         let date = dateField.value;
        
//         if (!task || !description || !date) {
//             return;
//         }

//         createArticle('OpenTask', 'green', 'red', task, description, date);
//         taskField.value='';
//         descriptionField.value='';
//         dateField.value='';
        
//     }

//     function createArticle(type, btnClass1, btnClass2, task, description, date) {
//         const article = document.createElement('article');
//         const h3 = document.createElement('h3');
//         h3.textContent = task;
//         const p1 = document.createElement('p');
//         p1.textContent = `Description: ${description}`;
//         const p2 = document.createElement('p');
//         p2.textContent = `Due Date: ${date}`;

//         article.appendChild(h3);
//         article.appendChild(p1);
//         article.appendChild(p2);

//         if (type === 'OpenTask') {
            
//             const divEl = document.createElement('div');
//             divEl.className = 'flex';
//             const btn1 = document.createElement('button');
//             btn1.textContent = 'Start';
//             btn1.className = btnClass1;
//             btn1.addEventListener('click', () => {
//                 deleteTask(article);
//                 createArticle('ProgressTask', 'red', 'orange', task, description, date)
//             });

//             const btn2 = document.createElement('button');
//             btn2.textContent = 'Delete';
//             btn2.className = btnClass2;
//             btn2.addEventListener('click', () => deleteTask(article));

//             divEl.appendChild(btn1);
//             divEl.appendChild(btn2);
//             article.appendChild(divEl);
//             openArea.appendChild(article);
//         } else if (type === 'ProgressTask') {
//             const divEl = document.createElement('div');
//             divEl.className = 'flex';
//             const btn1 = document.createElement('button');
//             btn1.textContent = 'Delete';
//             btn1.className = btnClass1;
//             btn1.addEventListener('click', () => {
//                 deleteTask(article);
//             });

//             const btn2 = document.createElement('button');
//             btn2.textContent = 'Finish';
//             btn2.className = btnClass2;
//             btn2.addEventListener('click', () => {
//                 deleteTask(article);
//                 divEl.remove();
//                 completeArea.appendChild(article);
//             });

//             divEl.appendChild(btn1);
//             divEl.appendChild(btn2);
//             article.appendChild(divEl);
//             progressArea.appendChild(article);
//         } 

//         function deleteTask(article) {
//             article.remove();
//         }
//     }
// }


function solve() {
    let taskEl = document.getElementById('task');
    let descriptionEl = document.getElementById('description');
    let dateEl = document.getElementById('date');
    let sectionsElements = document.querySelectorAll('section');
    let openEl = sectionsElements[1].querySelector(':nth-child(2)');
    let inProgressEl = sectionsElements[2].querySelector(':nth-child(2)');
    let completeEl = sectionsElements[3].querySelector(':nth-child(2)');

    document.getElementById('add').addEventListener('click', moveToOpen);
    function moveToOpen(e) {
        e.preventDefault();
        if (taskEl !== '' && descriptionEl !== '' && dateEl !== '') {
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = taskEl.value;

            let firstP = document.createElement('p');
            firstP.textContent =`Description: ` + descriptionEl.value;

            let secondP = document.createElement('p');
            secondP.textContent =`Due Date: ` + dateEl.value;

            let div = document.createElement('div');
            div.setAttribute('class', 'flex');

            let firstButton = document.createElement('button');
            firstButton.textContent = 'Start';
            firstButton.setAttribute('class', 'green');

            let secondButton = document.createElement('button');
            secondButton.textContent = 'Delete';
            secondButton.setAttribute('class', 'red');

            div.appendChild(firstButton);
            div.appendChild(secondButton);

            article.appendChild(h3);
            article.appendChild(firstP);
            article.appendChild(secondP);
            article.appendChild(div);

            openEl.appendChild(article);

            taskEl.value = '';
            dateEl.value = '';
            descriptionEl.value = '';

            firstButton.addEventListener('click', moveToProgress);
            function moveToProgress(e){
                inProgressEl.appendChild(article);
                div.remove();
                let inProgressDiv=document.createElement('div');
                inProgressDiv.setAttribute('class', 'flex');
                let inProgressFirstButton=document.createElement('button');
                inProgressFirstButton.textContent='Delete';
                inProgressFirstButton.setAttribute('class', 'red');
                let inProgressSecondButton=document.createElement('button');
                inProgressSecondButton.textContent='Finish';
                inProgressSecondButton.setAttribute('class', 'orange');

                inProgressDiv.appendChild(inProgressFirstButton);
                inProgressDiv.appendChild(inProgressSecondButton);
                article.appendChild(inProgressDiv);

                inProgressFirstButton.addEventListener('click', removeElement);
                function removeElement(){
                    article.remove()
                }
                inProgressSecondButton.addEventListener('click', moveToComplete);
                function moveToComplete(){
                    completeEl.appendChild(article);
                    inProgressDiv.remove();
                }
            }
            secondButton.addEventListener('click', removeEl);
            function removeEl(){
                article.remove();
            }
        }
    }
}