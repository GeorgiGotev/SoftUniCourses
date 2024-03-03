function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', showNumbers);
    document.getElementById('btnCreate').addEventListener('click', createNumbers);
    document.getElementById('phonebook').addEventListener('click', deleteFunc);
}

async function showNumbers(e) {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();
    loadPhones(data);
}

async function deleteFunc(e) {
    if (e.target.textContent === 'Delete') {
        let id = e.target.id;
        let res = await fetch(
            `http://localhost:3030/jsonstore/phonebook/${id}`,
            {
                method: 'DELETE',
            }
        );
        e.target.parentElement.remove();
    }
}

function loadPhones(data) {
    let phones = document.getElementById('phonebook');
    phones.replaceChildren();
    Object.values(data).map((x) => {
        let li = document.createElement('li');
        li.textContent = `${x.person}: ${x.phone}`;
        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.setAttribute('id', `${x._id}`);
        li.appendChild(btn);
        phones.appendChild(li);
    });
}

async function createNumbers(e) {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');
    
    if(!person.value || !phone.value){
        return
    }
    let data = {
        person: person.value,
        phone: phone.value,
    };
    person.value = '';
    phone.value = '';

    let res = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    showNumbers();
}

attachEvents();
