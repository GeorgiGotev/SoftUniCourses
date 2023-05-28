function notify(message) {
  let div=document.getElementById('notification');
  div.style.display='block';
  div.textContent=message;
  div.addEventListener('click', remove);
  function remove(e){
    div.style.display='none';
  }
}