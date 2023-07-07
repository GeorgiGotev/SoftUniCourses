const allGuestElements = Array.from(document.querySelectorAll('.guest'));
const allUserElements = Array.from(document.querySelectorAll('.user'));
const welcomeMessageElement = document.querySelector('a#welcome-msg');

export function navRender() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    if (userData !== null) {
        const email = userData['email'];
        allGuestElements.forEach(guestEl => guestEl.style.display = 'none');
        allUserElements.forEach(userEl => userEl.style.display = '');
        welcomeMessageElement.textContent = `Welcome, ${email}!`;
    } else {
        allGuestElements.forEach(guestEl => guestEl.style.display = '');
        allUserElements.forEach(userEl => userEl.style.display = 'none');
    }
}