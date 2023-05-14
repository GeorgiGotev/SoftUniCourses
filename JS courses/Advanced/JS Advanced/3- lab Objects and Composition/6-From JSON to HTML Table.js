// // function fromJSONToHTMLTable(input) {
//     // let students = JSON.parse(input);
//     // let htmlText = ['<table>'];
//     // let objNames = students[0];
  
//     // htmlText.push(makeKeyRow(objNames));
//     // students.forEach(obj => htmlText.push(makeValueRow(obj)));
//     // htmlText.push('</table>');
  
//     // function makeKeyRow(arr) {
//     //   let keys = [];
//     //   Object.keys(arr).forEach(key => {
//     //     keys.push(`<th>${escapeHTML(key)}</th>`);
//     //   });
//     //   return ("<tr>" + keys.join('') + "</tr>");
//     // }
  
//     // function makeValueRow(obj) {
//     //   let rows = [];
//     //   Object.values(obj).forEach(value => {
//     //     rows.push(`<td>${escapeHTML(value)}</td>`);
//     //   });
//     //   return ("<tr>" + rows.join('') + "</tr>");
//     // }
  
//     // function escapeHTML(value) {
//     //   return value
//     //     .toString()
//     //     .replace(/&/g, '&amp;')
//     //     .replace(/</g, '&lt;')
//     //     .replace(/>/g, '&gt;')
//     //     .replace(/"/g, '&quot;')
//     //     .replace(/'/g, '&#39;');
//     // }
  
//     // return htmlText.join('\r\n');

//     function fromJSONToHTMLTable(input){
//       let table = document.createElement('table');
//       let row = document.createElement('tr');
//       let wrapperSelection = document.getElementById('wrapper');
//       wrapperSelection.appendChild(table);
//       let tableSelection = document.querySelector('#wrapper table');
//       tableSelection.appendChild(row)
//       let text =JSON.parse(input);
//       console.log(text);
//       // for (const object of text) {
//       //     let objectKeys = Object.Keys(object);
//       //     for (const key of objectKeys) {
//       //         document.createElement('th').textContent = key;
//       //     }
//       // }


  
//   }

  

//   window.onload = function(){
//       let container = document.getElementById('wrapper');
//       container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
//   };


//   // must do it with DOM...

function fromJSONToHTMLTable(input) {
  let wrapper = document.getElementById('wrapper');
  let table = document.createElement('table');
  let trTH = document.createElement('tr');

  table.appendChild(trTH);
  wrapper.appendChild(table);

  let text = JSON.parse(input);
  let keysForTH = Object.keys(text[0]);

  for (const keyForHead of keysForTH) {
      let thForPerson = document.createElement('th');
      thForPerson.textContent = keyForHead;
      trTH.appendChild(thForPerson)

  }

  Object.entries(text).forEach(person => {
      let trFromPersons = document.createElement('tr');
      if (person[1].Name) {
          let tdName = document.createElement('td');
          tdName.textContent = person[1].Name;
          trFromPersons.appendChild(tdName);
      }

      if (person[1].Price) {
          let tdPrice = document.createElement('td');
          tdPrice.textContent = person[1].Price;
          trFromPersons.appendChild(tdPrice);
      }

      if (person[1].Grade) {
          let tdGrade = document.createElement('td');
          tdGrade.textContent = person[1].Grade;
          trFromPersons.appendChild(tdGrade);
      }

      table.appendChild(trFromPersons);
      
  });
  console.log(wrapper.innerHTML);
}








window.onload = function () {
  let container = document.getElementById('wrapper');
  container.text = fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5,"Grade":2  },{"Name":"Rumen","Price":6, "Grade":4}]']);

};