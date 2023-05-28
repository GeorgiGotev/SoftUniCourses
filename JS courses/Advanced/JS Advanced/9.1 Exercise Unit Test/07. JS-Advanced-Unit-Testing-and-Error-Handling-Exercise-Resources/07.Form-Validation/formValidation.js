function validate() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passInput = document.getElementById('password');
    let confirmPassInput = document.getElementById('confirm-password');
    let checkBox = document.getElementById('company');
    let submit = document.getElementById('submit');

    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;

    checkBox.addEventListener('change', checkButton);
    function checkButton() {
        let company = document.getElementById('companyInfo');
        if (checkBox.checked) {
            company.style.display = 'block';
        } else {
            company.style.display = 'none';
        }
    }

    submit.addEventListener('click', validateInput);
    function validateInput(e) {
        e.preventDefault();
        let isValid = true;

        if (!userTest.exec(usernameInput.value)) {
            isValid = false;
            usernameInput.style.borderColor = 'red';
        } else {
            usernameInput.style.borderColor = '';
            isValid = true;
        }

        if (!emailTest.exec(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = '';
            isValid = true;
        }
        if (!passTest.exec(passInput.value)) {
            isValid = false;
            passInput.style.borderColor = 'red';
        } else {
            passInput.style.borderColor = '';
            isValid = true;
        }
        if (
            !(passInput.value === confirmPassInput.value) ||
            !passTest.exec(confirmPassInput.value)
        ) {
            isValid = false;
            confirmPassInput.style.borderColor = 'red';
        } else {
            isValid = true;
            confirmPassInput.style.borderColor = '';
        }
        if (checkBox.checked) {
            let companyNumber = document.getElementById('companyNumber');
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid=false;
              } else {
                companyNumber.style.borderColor = "";
                isValid=true;
              }
        }
        if(isValid){
            document.querySelector("#valid").style.display = "block";
        }else{
            document.querySelector("#valid").style.display = "none";
        }
    }
}
