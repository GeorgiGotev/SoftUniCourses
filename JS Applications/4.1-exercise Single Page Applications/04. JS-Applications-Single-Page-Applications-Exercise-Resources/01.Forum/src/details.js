let postElements={
    title: document.getElementById('details-title'),
    username: document.getElementById('details-username'),
    time: document.getElementById('details-time'),
    content: document.getElementById('details-content'),
}
let comments=document.getElementById('user-comment');
// comments.remove()
const section=document.querySelector('.theme-content');
section.remove();

export function showDetails(e){
    let target=e.target;
    if(target.tagName == 'H2'){
        target=target.parentElement;
       
    }
    if(target.tagName=='A'){
        e.preventDefault();
        let id=e.target.parentElement.parentElement.parentElement.parentElement.id;
        
        showPost(id); 

    }
    
}

 async function showPost(id){
    const res=await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/` + id);
    let data=await res.json();

    postElements.title.textContent=data.title;
    postElements.username.textContent=data.userName;
    postElements.time.textContent=data.dateCreated;
    postElements.content.textContent=data.content;

    document.getElementById('main').replaceChildren(section);
    

}