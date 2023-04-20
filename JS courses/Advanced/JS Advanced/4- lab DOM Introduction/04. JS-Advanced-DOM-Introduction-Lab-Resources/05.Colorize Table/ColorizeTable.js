function colorize() {
    let trElements=document.querySelectorAll('tr:nth-child(2n)');
    for (const element of trElements) {
        element.style.backgroundColor='Teal';
    }
}