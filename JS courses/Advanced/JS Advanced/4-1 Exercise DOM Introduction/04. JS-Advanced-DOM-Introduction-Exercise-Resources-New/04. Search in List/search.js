function search() {
   let arrListElements = Array.from(document.querySelectorAll('#towns li'));
   let inputElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');
   let counter = 0;
   
   arrListElements.forEach(element => {
      if (element.textContent.toLowerCase().includes(inputElement.value.toLowerCase())) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         counter++;
      } else {
         element.style.textDecoration = 'none';
         element.style.fontWeight = 'normal';
      }
   });
   inputElement.value = '';
   resultElement.textContent = `${counter} matches found`;
}
