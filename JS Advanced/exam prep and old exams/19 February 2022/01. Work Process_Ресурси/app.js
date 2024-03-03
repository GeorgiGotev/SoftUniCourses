function solve() {
    let inputFields = Array.from(document.querySelectorAll('#signup input'));
    let hireButton = document.getElementById('add-worker');
    hireButton.addEventListener('click', moveToTable);
    let salarySum = document.getElementById('sum');
    let tbody = document.getElementById('tbody');

    function moveToTable(e) {
        e.preventDefault();
        let check = inputFields.some((x) => x.value === '');
        if (check) {
            return;
        }

        let firstName = inputFields[0].value;
        let lastName = inputFields[1].value;
        let email = inputFields[2].value;
        let year = inputFields[3].value;
        let spec = inputFields[4].value;
        let salary = Number(inputFields[5].value);

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = firstName;
        let td2 = document.createElement('td');
        td2.textContent = lastName;
        let td3 = document.createElement('td');
        td3.textContent = email;
        let td4 = document.createElement('td');
        td4.textContent = year;
        let td5 = document.createElement('td');
        td5.textContent = spec;
        let td6 = document.createElement('td');
        td6.textContent = salary;
        let td7 = document.createElement('td');

        let button1 = document.createElement('button');
        button1.setAttribute('class', 'fired');
        button1.textContent = 'Fired';
        button1.addEventListener('click', (e)=>{
            remove(e);
        });

        let button2 = document.createElement('button');
        button2.setAttribute('class', 'edit');
        button2.textContent = 'Edit';
        button2.addEventListener('click', moveForEdit);

        function moveForEdit(e) {
            inputFields[0].value = firstName;
            inputFields[1].value = lastName;
            inputFields[2].value = email;
            inputFields[3].value = year;
            inputFields[4].value = spec;
            inputFields[5].value = salary;
            remove(e);
        }
        
        function remove(e) {
            let parent = e.target.parentElement.parentElement;
            parent.remove();
            salarySum.textContent = (Number(salarySum.textContent) - salary).toFixed(2);
        }

        td7.appendChild(button1);
        td7.appendChild(button2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tbody.appendChild(tr);

        salarySum.textContent = (Number(salarySum.textContent) +  salary).toFixed(2);

        inputFields.forEach((element) => {
            element.value = '';
        });
    }
}
solve();
