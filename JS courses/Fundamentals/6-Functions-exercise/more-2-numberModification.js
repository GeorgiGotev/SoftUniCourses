function numberModification(number) {
    let toStr = number.toString();
    while (!check()) {
        toStr += 9;
    }
    console.log(toStr);

    function check() {
        let sum = 0;
        for (const char of toStr) {
            sum += Number(char);
        }
        if ((sum / toStr.length) > 5) {
            return true;
        } else {
            return false;
        }
    }
}
numberModification(5835);