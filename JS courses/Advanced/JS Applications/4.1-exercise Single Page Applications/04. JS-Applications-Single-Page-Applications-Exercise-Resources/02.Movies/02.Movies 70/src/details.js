import { homePage,displayMovies } from "./home.js"
import { showView, showSection} from "./utils.js"

const details = document.querySelector('#movie-example')
const idtSection = document.querySelector('#edit-movie')
const editForm = document.querySelector('form[data-id="edit-form"]');
export function detailsPage(id) {

    showView(details)
    getMovie(id)

}

async function getMovie(id) {

    try {
        const response = await fetch(`http://localhost:3030/data/movies/${id}`)
        if (!response.ok) {
            const error = await response.json()
            throw new (error.message)
        }

        const data = await response.json()

        const user = JSON.parse(sessionStorage.getItem('user'))
        const [likes, ownLikes] = await Promise.all([
            like(id), ownLike(id, user)
        ]);

        details.replaceChildren(onCreateMovie(data, user, likes, ownLikes))

    } catch (err) {
        alert(err.message)
        throw err
    }

}





function onCreateMovie(movie, user, likes, ownLikes) {
  const element = document.createElement('div')
  element.className = 'container'

  element.innerHTML = `
<div class="row bg-light text-dark">
<h1>Movie title: ${movie.title}</h1>

  <div class="col-md-8">
      <img class="img-thumbnail" src="${movie.img}" alt="Movie">
  </div>
  <div class="col-md-4 text-center">
      <h3 class="my-3 ">Movie Description</h3>
      <p>${movie.description}</p>
     ${onControls(movie, user, likes, ownLikes)}
  </div>
</div> 
`
   const deleteBtn = element.querySelector('#delete-button');
   const editBtn = element.querySelector('#edit-button');
  //const likeBtn = element.querySelector('a[data-id="like-function"]');

  const likeBtn = element.querySelector('.like-btn')

  if (deleteBtn) {
       deleteBtn.addEventListener('click', (e) => deleteMovie(e, movie));
      editBtn.addEventListener('click', (e) => showEditMovie(e, movie));
  }else if (likeBtn) {
    likeBtn.addEventListener('click', (e) => likeMovie(e, movie._id))
} 
  return element

}


function onControls(movie, user, likes, ownLikes) {
  const likesArr = [];

  const isOwner = user && user._id == movie._ownerId
  if (isOwner) {
      likesArr.push(`<a id="delete-button" class="btn btn-danger delete-button" href="#">Delete</a>`)
      likesArr.push(`<a id="edit-button" class="btn btn-warning" href="#">Edit</a>`)

  } else if (user && ownLikes == false) {
      likesArr.push(`<a class="btn btn-primary like-btn" href="#">Like</a>`)

  }
  likesArr.push(`<span class="enrolled-span">Liked ${likes}</span>`)
  return likesArr.join('')
}

export async function like(id) {
  const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
  const likes = await res.json();

  return likes;
}
async function ownLike(movieId, user) {

  if (!user) {
      return false;

  } else {
      const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${user._id}%22 `)
      const data = await response.json();
      return data.length > 0;
  }


}

async function likeMovie(e, movieId) {
  e.preventDefault()
  const user = JSON.parse(sessionStorage.getItem('user'))

  const response = await fetch(`http://localhost:3030/data/likes`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': user.accessToken,
      },
      body: JSON.stringify({ movieId })
  })

  detailsPage(movieId);
}


function showEditMovie(e,movie) {
  e.preventDefault()
   showView(idtSection)
  const titleElement = document.querySelector('input[data-id="edit-title"]');
  const descriptionElement = document.querySelector('textarea[data-id="edit-description"]');
  const imgElement = document.querySelector('input[data-id="edit-img"]');

  editForm.addEventListener('submit', (e)=> onEditMovie(e,movie));

  titleElement.value = movie.title;
  descriptionElement.value = movie.description;
  imgElement.value = movie.img;

  console.log(movie);
}
async function deleteMovie(e, movie) {

  e.preventDefault()
  const user = JSON.parse(sessionStorage.getItem('user'))
  try {
      const res = await fetch(`http://localhost:3030/data/movies/${movie._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
              'X-Authorization': user.accessToken,
          }
      })
      if (!res.ok) {
          const error = await res.json()
          throw new Error(error)
      }
      const data = await res.json()
      homePage()
  } catch (err) {
      alert(err.message)
  }

}
function onEditMovie(e, movie) {
  e.preventDefault();
  const data = new FormData(e.target);

  const title = data.get('title');
  const description = data.get('description');
  const img = data.get('img');

  const body = {
      title: title,
      description: description,
      img: img
  }
  const user = JSON.parse(sessionStorage.getItem('user'));
  //  console.log(user)
  const options = {
      method: "PUT",
      headers: {
      'Content-type': 'application/json',
      "X-Authorization": user.accessToken
  },
      body: JSON.stringify(body)
  }

  fetch(`http://localhost:3030/data/movies/${movie._id}`,options)
  .then(res => res.json())
  .then(() => {
 
   homePage()

  }).catch(err => {
      alert(err);
  })

}