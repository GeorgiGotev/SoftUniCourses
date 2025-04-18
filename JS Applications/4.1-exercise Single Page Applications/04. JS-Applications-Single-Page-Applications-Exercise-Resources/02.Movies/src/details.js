import { showView } from './util.js';

const detailsSection = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(detailsSection);
    displayMovie(id);
}

async function displayMovie(id) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [movie, getlike, getownlike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, user),
    ]);
    detailsSection.replaceChildren(createMovie(movie,user, getlike,getownlike));
}

function createMovie(movie, user,getlike,getownlike) {
    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
    <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                $${movie.description}
              </p> 
              ${createControls(movie, user,getlike,getownlike)}
            </div>
          </div>
    `;
    const likeBtn=element.querySelector('.like-btn');
    if(likeBtn){
        likeBtn.addEventListener('click', (e)=>likeMovie(e, movie._id))
    }
    return element;
}

function createControls(movie, user,getlike,getownlike) {

    const isOwner = user && user._id == movie._ownerId;
   let controls=[];
    if (isOwner) {
        controls.push(`<a class="btn btn-danger" href="#">Delete</a>`);
        controls.push(`<a class="btn btn-warning" href="#">Edit</a>`);
    } else if(user && getownlike==false){
        controls.push(`<a class="btn btn-primary like-btn" href="#">Like</a>`);
        
        
    }
    controls.push(`<span class="enrolled-span">Liked ${getlike}</span>`);
    return controls.join('')
}

async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await res.json();

    return movie;
}

async function getLikes(id) {
    const res = await fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    );
    const likes = await res.json();

    return likes;
}

async function getOwnLike(movieId, user) {
    if (!user) {
        return false;
    } else {
        const userId = user._id;
        const res = await fetch(
            `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
        );
        const like = await res.json();

        return like.length>0;
    }
}

async function likeMovie(e,movieId){
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    await fetch(`http://localhost:3030/data/likes`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            'X-Authorization': user.accessToken,
        },
        body: JSON.stringify({movieId})
    });
    detailsPage(movieId);
}
