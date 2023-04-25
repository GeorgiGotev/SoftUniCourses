
let p=document.createElement('p');
let p2=document.createElement('p');
let li=document.createElement('li');

let button=document.createElement('button');
button.textContent='Red';
button.style.backgroundColor='red';
let secondButton=document.createElement('button');
secondButton.textContent='Black';
secondButton.style.backgroundColor='black';
secondButton.style.color='white'
let thirdButton=document.createElement('button');
thirdButton.textContent='Pink';
thirdButton.style.backgroundColor='pink';

let text='Create "p" element with js';
p2.textContent='Second "p" created with js';
p.textContent=text;
let bodyElement=document.querySelector('body');
li.appendChild(p);
li.appendChild(p2);
bodyElement.appendChild(li);
bodyElement.appendChild(button);
bodyElement.appendChild(secondButton);
bodyElement.appendChild(thirdButton);

let arr=Array.from(document.getElementsByTagName('button'));
arr.forEach(element => {
    element.style.margin='10px';
    element.style.borderRadius='25px';
    element.style.fontSize='25px';
});

button.addEventListener('click', function(){
    p2.style.color='red';
    p.style.color='red';
});
secondButton.addEventListener('click', function(){
    p.style.color='black';
    p2.style.color='black';
});
thirdButton.addEventListener('click', function(){
    p.style.color='pink';
    p2.style.color='pink';
})

li.style.display='block';

