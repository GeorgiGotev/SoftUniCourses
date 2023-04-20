function editElement(htmlEl, str, replacer) {
    let el1 = htmlEl.textContent.split(str).join(replacer);
    htmlEl.textContent = el1;
}