window.addEventListener("load", solve);

function solve() {

  publishButton.addEventListener('click', publish);
  //'add new post' elements
  let titleInputElement = document.getElementById('post-title');
  let categoryInputElement = document.getElementById('post-category');
  let commentInputElement = document.getElementById('post-content');
  let publishButton = document.getElementById('publish-btn');
  //'post for review' elements;

  let reviewItemsElement = document.getElementById('review-list');

  //upload posts elements
  let publishedElements = document.getElementById('published-list');
  let clearButton = document.getElementById('clear-btn');

  function publish() {
    if (titleInputElement.value && categoryInputElement.value && commentInputElement.value) {
      let liElement = document.createElement('li');
      liElement.setAttribute("class", "rpost");
      reviewItemsElement.appendChild(liElement);

      let articleElement = document.createElement('article');
      let h4Element = document.createElement('h4');
      let firstPElement = document.createElement('p');
      let secondPElement = document.createElement('p');
      articleElement.appendChild(h4Element);
      articleElement.appendChild(firstPElement);
      articleElement.appendChild(secondPElement);
      liElement.appendChild(articleElement);

      let buttonEdit = document.createElement('button');
      buttonEdit.textContent = 'Edit';
      buttonEdit.setAttribute("class", "action-btn edit");
      let buttonApprove = document.createElement('button');
      buttonApprove.textContent = 'Approve';
      buttonApprove.setAttribute("class", "action-btn approve");
      liElement.appendChild(buttonApprove);
      liElement.appendChild(buttonEdit);

      h4Element.textContent = titleInputElement.value;
      firstPElement.textContent = `Category: ${categoryInputElement.value}`;
      secondPElement.textContent = `Content: ${commentInputElement.value}`;
      titleInputElement.value = '';
      categoryInputElement.value = '';
      commentInputElement.value = '';


      buttonEdit.addEventListener('click', edit);
      function edit() {
        titleInputElement.value = h4Element.textContent;
        h4Element.textContent = '';
        let textFirstP = firstPElement.textContent.split('Category: ');
        categoryInputElement.value = textFirstP[1];
        firstPElement.textContent = '';
        let textSecondP = secondPElement.textContent.split('Content: ');
        commentInputElement.value = textSecondP[1];
        secondPElement.textContent = '';
        liElement.remove()
      }

      buttonApprove.addEventListener('click', approve);
      function approve() {
        publishedElements.appendChild(liElement);
        console.log(buttonApprove.textContent);
        buttonApprove.remove()
        buttonEdit.remove()
      }

      clearButton.addEventListener('click', clear);
      function clear() {
        liElement.remove()
      }
    }
  }
}