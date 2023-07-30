window.addEventListener('load', solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let priceInput = document.getElementById('original-cost');
  let sellPriceInput = document.getElementById('selling-price');

  let buttonPublish = document.getElementById('publish');
  let table = document.getElementById('table-body');
  let input = Array.from(document.querySelectorAll('fieldset input, select'));

  let profit=0;

  buttonPublish.addEventListener('click', move);
  function move(e) {
      e.preventDefault();
      let tr = document.createElement('tr');
      tr.setAttribute('class', 'row');
      if (input.some((x) => x.value === '') || Number(sellPriceInput.value)<Number(priceInput.value)) {
          return;
      } else {
          input.forEach((element) => {
              let td = document.createElement('td');
              td.textContent = element.value;
              tr.appendChild(td);
              element.value = '';
          });
      }

      let tdButtons = document.createElement('td');
      let button1 = document.createElement('button');
      button1.setAttribute('class', 'action-btn edit');
      button1.textContent = 'Edit';
      let button2 = document.createElement('button');
      button2.setAttribute('class', 'action-btn sell');
      button2.textContent = 'Sell';

      button1.addEventListener('click', edit);
      function edit(e) {
          tr.remove();
          makeInput.value = tr.children[0].textContent;
          modelInput.value = tr.children[1].textContent;
          yearInput.value = tr.children[2].textContent;
          fuelInput.value = tr.children[3].textContent;
          priceInput.value = tr.children[4].textContent;
          sellPriceInput.value = tr.children[5].textContent;
      }
      button2.addEventListener('click', sell);
      let sellIdCell=document.getElementById('cars-list');

      function sell(e){
        tr.remove();
        let liEl=document.createElement('li');
        liEl.setAttribute('class', 'each-list');

        let span1=document.createElement('span');
        span1.textContent=`${tr.children[0].textContent} ${tr.children[1].textContent}`
        let span2=document.createElement('span');
        span2.textContent=tr.children[2].textContent;
        let span3=document.createElement('span');
        span3.textContent=Number(tr.children[5].textContent)-Number(tr.children[4].textContent)

        liEl.appendChild(span1);
        liEl.appendChild(span2);
        liEl.appendChild(span3);

        sellIdCell.appendChild(liEl);
        let totalProfitP=document.getElementById('profit');
        profit+=Number(span3.textContent);
        totalProfitP.textContent=profit.toFixed(2);
      }

      tdButtons.appendChild(button1);
      tdButtons.appendChild(button2);
      tr.appendChild(tdButtons);
      table.appendChild(tr);
  }
}