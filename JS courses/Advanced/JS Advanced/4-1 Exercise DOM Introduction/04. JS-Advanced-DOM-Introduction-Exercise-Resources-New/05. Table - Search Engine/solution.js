function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let inputElement = document.getElementById('searchField');

   function onClick() {
      let listArr = Array.from(document.querySelectorAll('tbody tr')).forEach((everyRow) => {
         if (everyRow.textContent.toLowerCase().includes(inputElement.value.toLowerCase())) {
            everyRow.classList.add('select');
         } else {
            everyRow.classList.remove('select');
         }
      });;

      inputElement.value = '';
   }
}