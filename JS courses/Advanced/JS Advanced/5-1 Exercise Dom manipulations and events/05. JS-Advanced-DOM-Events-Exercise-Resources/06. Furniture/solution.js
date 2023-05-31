function solve() {
    let [inputElement, outputElement] = document.querySelectorAll('textarea');
    // let inputElement = document.querySelector('textarea:first-of-type');
    // let outputElement = document.querySelector('#exercise textarea:nth-child(5)');

    document
        .querySelector('button:first-of-type')
        .addEventListener('click', generate);
    document
        .querySelector('#exercise button:nth-child(6)')
        .addEventListener('click', buy);

    let tableOfItems = document.querySelector('.table tbody');

    function generate(e) {
        let arrayOfItemsInfo = JSON.parse(inputElement.value);
        arrayOfItemsInfo.forEach((item) => {
            let tr = document.createElement('tr');

            let img = document.createElement('img');
            let imgTd = document.createElement('td');
            img.src = item.img;
            imgTd.appendChild(img);
            tr.appendChild(imgTd);

            let nameTd = document.createElement('td');
            nameTd.textContent = item.name;
            tr.appendChild(nameTd);

            let priceTd = document.createElement('td');
            priceTd.textContent = item.price;
            tr.appendChild(priceTd);

            let decorationTd = document.createElement('td');
            decorationTd.textContent = item.decFactor;
            tr.appendChild(decorationTd);

            let mark = document.createElement('td');
            let markInput = document.createElement('input');
            markInput.type = 'checkbox';
            mark.appendChild(markInput);
            tr.appendChild(mark);

            tableOfItems.appendChild(tr);
        });
    }

    function buy(e) {
        const furniture = Array.from(
            document.querySelectorAll('input[type="checkbox"]')
        );
        let names = [];
        let totalPrice = 0;
        let sumDeco = 0;

        furniture.forEach((checked) => {
            if (checked.checked) {
                let parent = checked.parentElement.parentElement;
                let price = parent.children[2];
                totalPrice += Number(price.textContent);
                let decoFactor = Number(parent.children[3].textContent);
                sumDeco += decoFactor;
                let name = parent.children[1];
                names.push(name.textContent);
            }
            avgDeco = sumDeco / names.length;
            let result = `Bought furniture: ${names.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${avgDeco}`;
            outputElement.value = result;
        });
    }
}
