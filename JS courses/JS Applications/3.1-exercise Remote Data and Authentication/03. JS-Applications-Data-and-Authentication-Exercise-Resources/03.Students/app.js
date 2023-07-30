let table = document.querySelector('#results tbody');
document.getElementById('submit').addEventListener('click', addPerson);
const form = [...document.querySelectorAll('#form .inputs input')];

async function loadData(e) {
    let res = await fetch(
        `http://localhost:3030/jsonstore/collections/students`
    );
    let data = await res.json();
    table.replaceChildren();
    Object.values(data).forEach((x) => {
        let tr = document.createElement('tr');
        let tdFirst = document.createElement('td');
        tdFirst.textContent = x.firstName;
        let tdLast = document.createElement('td');
        tdLast.textContent = x.lastName;
        let tdNum = document.createElement('td');
        tdNum.textContent = x.facultyNumber;
        let tdGrade = document.createElement('td');
        tdGrade.textContent = x.grade;

        tr.appendChild(tdFirst);
        tr.appendChild(tdLast);
        tr.appendChild(tdNum);
        tr.appendChild(tdGrade);

        table.appendChild(tr);
    });
}
loadData();

async function addPerson(e) {
    e.preventDefault();
    let firstName = form[0];
    let lastName = form[1];
    let num = form[2];
    let grade = form[3];
    if (!firstName.value || !lastName.value || !num.value || !grade.value) {
        return;
    }
    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: num.value,
        grade: grade.value,
    };
    form.forEach(x=>x.value='')
    let res = await fetch(
        `http://localhost:3030/jsonstore/collections/students`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
    );
    loadData();
}
