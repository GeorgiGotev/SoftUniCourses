window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    document.getElementById('user').style.display = 'none';
    document.querySelector('form').addEventListener('submit', onRegister);
});

async function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    onSubmit(
        [...formData.entries()].reduce(
            (p, [k, v]) => Object.assign(p, { [k]: v }),
            {}
        )
    );
    ev.target.reset();
}

async function onSubmit(dataUser) {
    let pass = dataUser.password;
    let resPass = dataUser.rePass;

    const body = JSON.stringify({
        email: dataUser.email,
        password: dataUser.password,
    });

    try {
        if (pass != resPass) {
            throw new Error('passwords not equal');
        }
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json();

        sessionStorage.setItem('authToken', data.accessToken);
        window.location = '/index.html';
    } catch (err) {
        alert(err.message);
    }
}
