
//get userData to check if(user)
export function getUserData() {
  return JSON.parse(sessionStorage.getItem('userData'));
}
//set user data to save in sessionStorage
export function setUserData(data) {
  sessionStorage.setItem('userData', JSON.stringify(data));
}
//clear user data on logout
export function clearUserData() {
  sessionStorage.removeItem('userData');
}
//create handler with callback for forms
export function createSubmitHandler(callback) {
  return function (e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

       callback(data);
  };
}


export function notify(message) {
  const notifyElement = document.getElementById('errorBox');
  const notification = document.querySelector('#errorBox span');

  notifyElement.style.display = 'block';
  notification.textContent = message;

  setTimeout(() => (notifyElement.style.display = 'none'), 3000);
}