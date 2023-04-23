function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let result = document.getElementById('result');

    let emailArr = Array.from(emailElements)
                        .find(x => x.textContent == input.value);

    if (emailArr) {
        emailArr.parentElement.remove();

        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.';
    }
}