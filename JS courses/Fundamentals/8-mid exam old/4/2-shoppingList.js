function shoppingList(input) {
    let listArr = input.shift().split('!');
    let line = input.shift()

    while (line !== 'Go Shopping!') {
        let [command, product1, product2] = line.split(' ');
        switch (command) {
            case 'Urgent':
                if (!listArr.includes(product1)) {
                    listArr.unshift(product1);
                }
                break;
            case 'Unnecessary':
                if (listArr.includes(product1)) {
                 let   index=listArr.indexOf(product1);
                    listArr.splice(index,1);
                }
                break;
            case 'Correct':
                if (listArr.includes(product1)) {
                    let   index=listArr.indexOf(product1);
                    listArr.splice(index,1,product2);
                }
                break;
            case 'Rearrange':
                if (listArr.includes(product1)) {
                    let   index=listArr.indexOf(product1);
                    listArr.splice(index,1);
                    listArr.push(product1);
                }
                break;

        }
        line = input.shift();
    }
    console.log(listArr.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
;