function extractText() {
//first example
//     let textElements = document.getElementById('items');
//     let result = document.getElementById('result');
//     let arr = Array.from(textElements.children);

//     let output = arr.map(li => li.textContent).join('\n');
//     result.value = output;
// }

//second example there is a white space in the result input
// function extractText() {
//     let textElements=document.getElementById('items');
//     let result=document.getElementById('result').value=textElements.textContent;
// }

// third example
let textElements = document.querySelectorAll("li");
let result = document.getElementById('result');
for (list of textElements) {
    result.value += list.textContent + '\n';
}
}


