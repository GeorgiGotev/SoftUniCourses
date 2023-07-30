function create(words) {
   let body = document.getElementById('content')
   words.forEach(word => {
      let div = document.createElement('div');
      body.appendChild(div);

      let p = document.createElement('p');
      p.style.display = 'none'
      p.textContent = word;
      div.appendChild(p);

      div.addEventListener('click', (e) => {
         e.target.querySelector('p').style.display='block';
      });    
   });
}