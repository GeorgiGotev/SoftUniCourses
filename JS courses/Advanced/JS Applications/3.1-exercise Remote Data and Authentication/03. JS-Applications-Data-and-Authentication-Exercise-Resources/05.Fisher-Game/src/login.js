window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const form = document.querySelector('#login-view #login');
    document.getElementById('user').style.display = 'none';
    form.addEventListener('submit', onLogin);
});

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const res = await fetch(`http://localhost:3030/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok != true) {
            e.target.reset();
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location='/index.html'
    } catch (err) {
        alert(err.message)
    }
}
