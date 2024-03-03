let userData = null;

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    userData = JSON.parse(sessionStorage.getItem('userData'));
    let catches=document.getElementById('catches');
    [...catches.children].forEach(x=>x.remove());
    if (userData != null) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector(
            '.email'
        ).textContent = `Welcome, ${userData.email}`;
        document.querySelector('#addForm .add').disabled = false;
        document.getElementById('logout').addEventListener('click', onLogout);
        document
            .getElementById('addForm')
            .addEventListener('submit', onCreateSubmit);
            loadData();
    } else {
        document.getElementById('user').style.display = 'none';
    }
    document.querySelector('.load').addEventListener('click', loadData);

});

async function onLogout(e) {
    e.preventDefault();
    try {
        let res = await fetch(`http://localhost:3030/users/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': userData.token,
            },
        });
        if (res.status !== 204) {
            throw new Error('dasda');
        }
        sessionStorage.clear();
        window.location = '/index.html';
    } catch (err) {
        console.log(err);
    }
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.target.dataset.id;

    const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-authorization': userData.token,
        },
    });
    loadData();
}

async function onCreateSubmit(e) {
    e.preventDefault();
    if (!userData) {
        window.location = '/login.html';
        return;
    }
    let formData = new FormData(e.target);
    const data = [...formData.entries()].reduce(
        (a, [k, v]) => Object.assign(a, { [k]: v }),
        {}
    );
    try {
        if (Object.values(data).some((x) => x == '')) {
            throw new Error('You must fill everything');
        }
        const res = await fetch(`http://localhost:3030/data/catches/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': userData.token,
            },
            body: JSON.stringify(data),
        });
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        e.target.reset();
        loadData();
    } catch (err) {
        alert(err.message);
    }
}

async function loadData() {
    const res = await fetch(`http://localhost:3030/data/catches/`);
    const data = await res.json();
    document
        .getElementById('catches')
        .replaceChildren(...data.map(createPreview));
    let allDeleteBtn = document.querySelectorAll('.delete');
    allDeleteBtn.forEach((element) => {
        element.addEventListener('click', onDelete);
    });
    let allUpdateBtn = document.querySelectorAll('.update');
    allUpdateBtn.forEach((element) => {
        element.addEventListener('click', onUpdate);
    });
}

function createPreview(item) {
    const isOwner = userData && item._ownerId == userData.id;

    const element = document.createElement('div');
    element.setAttribute('class', 'catch');
    element.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${item.angler}" ${
        !isOwner ? 'disabled' : ''
    }>
        <label>Weight</label>
        <input type="text" class="weight" value="${item.weight}" ${
        !isOwner ? 'disabled' : ''
    }>
        <label>Species</label>
        <input type="text" class="species" value="${item.species}" ${
        !isOwner ? 'disabled' : ''
    }>
        <label>Location</label>
        <input type="text" class="location" value="${item.location}" ${
        !isOwner ? 'disabled' : ''
    }>
        <label>Bait</label>
        <input type="text" class="bait" value="${item.bait}" ${
        !isOwner ? 'disabled' : ''
    }>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${item.captureTime}" ${
        !isOwner ? 'disabled' : ''
    }>
        <button class="update" data-id="${item._id}"${
        !isOwner ? 'disabled' : ''
    }>Update</button>
        <button class="delete" data-id="${item._id}"${
        !isOwner ? 'disabled' : ''
    }>Delete</button>
    `;
    return element;
}

async function onUpdate(e) {
    e.preventDefault();
    let id = e.target.dataset.id;
    let currElement = e.target.parentElement.children;
    if (
        !currElement[1].value ||
        !currElement[3].value ||
        !currElement[5].value ||
        !currElement[7].value ||
        !currElement[9].value ||
        !currElement[11].value
    ) {
        loadData();
        throw new Error('dsadsa');
    }
    data = {
        angler: currElement[1].value,
        weight: currElement[3].value,
        species: currElement[5].value,
        location: currElement[7].value,
        bait: currElement[9].value,
        captureTime: currElement[11].value,
    };
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-authorization': userData.token,
            },
            body: JSON.stringify(data),
        });
        if (res.ok != true) {
            throw new Error('dasdsa');
        }
    } catch (err) {
        console.log(err);
    }

    loadData();
}
// }
// else if (
//         e.target.textContent === 'Update' &&
//         e.target.tagName === 'BUTTON'
//     ) {
//         document
//             .getElementById('addForm')
//             .removeEventListener('submit', onCreateSubmit);
//         document
//             .getElementById('addForm')
//             .addEventListener('submit', updatedCatches);
//             console.log(e.target);
//         let currElement = e.target.parentElement.children;
//         let angler = document.querySelector('input[name="angler"]');
//         angler.value = currElement[1].value;

//         let weight = document.querySelector('input[name="weight"]');
//         weight.value = currElement[3].value;

//         let species = document.querySelector('input[name="species"]');
//         species.value = currElement[5].value;

//         let location = document.querySelector('input[name="location"]');
//         location.value = currElement[7].value;

//         let bait = document.querySelector('input[name="bait"]');
//         bait.value = currElement[9].value;

//         let captureTime = document.querySelector('input[name="captureTime"]');
//         captureTime.value = currElement[11].value;

//         async function updatedCatches(e) {
//             e.preventDefault();

//             let data = {
//                 angler: angler.value,
//                 weight: weight.value,
//                 species: species.value,
//                 location: location.value,
//                 bait: bait.value,
//                 captureTime: captureTime.value,
//             };
//             angler.value='';
//             weight.value='';
//             species.value='';
//             location.value='';
//             bait.value='';
//             captureTime.value='';

//             const res = await fetch(
//                 `http://localhost:3030/data/catches/${id}`,
//                 {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'X-authorization': userData.token,
//                     },
//                     body: JSON.stringify(data),
//                 }
//             );
//             document
//                 .getElementById('addForm')
//                 .addEventListener('submit', onCreateSubmit);
//             document
//                 .getElementById('addForm')
//                 .removeEventListener('submit', updatedCatches);
//             loadData();
//         }
//     }
