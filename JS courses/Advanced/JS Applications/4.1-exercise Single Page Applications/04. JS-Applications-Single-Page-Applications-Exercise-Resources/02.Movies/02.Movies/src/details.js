import { navRender } from './nav.js';
import { viewReset } from './viewReset.js';
import { get } from './api.js';
import { del } from './api.js';
import { showHome } from './home.js';
import { post } from './api.js';
import { put } from './api.js';

const movieDetailsSectionElement = document.querySelector('section[id="movie-example"]');
const movieDetailsElement = movieDetailsSectionElement.querySelector('div.row.bg-light.text-dark');
let targetDetails = null;
// console.log(movieDetailsElement);

export function showDetails(e) {
  if (e.target.tagName === 'BUTTON') {
    targetDetails = e.target;
    const userData = JSON.parse(localStorage.getItem('userData'));
    e.preventDefault();
    // console.log(e.target.dataset.id);
    // console.log(ownerId);

    // Show movie details page if logged-in user
    // if (userData) {
      // Renders navigation bar
      navRender();

      // Hides all views from page
      viewReset();

      getDetails();

      movieDetailsSectionElement.style.display = 'block';
    // }
  }

  async function getDetails() {
    const id = e.target.dataset.id;
    const movieDetails = await get(`/data/movies/${id}`);
    // console.log(movieDetails);
    createMovieDetails();

    async function createMovieDetails() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      let owner
      if (userData) {
        owner = userData['id'];        
      }
      let movieLikes = await get(`/data/likes?where=movieId%3D%22${movieDetails._id}%22&distinct=_ownerId&count`);
      // console.log(movieLikes);
      movieDetailsElement.replaceChildren();
      movieDetailsElement.innerHTML = `
            <h1>Movie title: ${movieDetails.title}</h1>

             <div class="col-md-8">
               <img
                 class="img-thumbnail"
                 src="${movieDetails.img}"
                 alt="Movie"
               />
             </div>
             <div class="col-md-4 text-center">
               <h3 class="my-3">Movie Description</h3>
               <p>${movieDetails.description}</p>
               <a data-id="${movieDetails._id}" data-ownerid="${movieDetails._ownerId}" class="btn btn-danger" href="javascript:void(0)">Delete</a>
               <a data-id="${movieDetails._id}" data-ownerid="${movieDetails._ownerId}" class="btn btn-warning" href="javascript:void(0)">Edit</a>
               <a data-id="${movieDetails._id}" data-ownerid="${movieDetails._ownerId}" class="btn btn-primary" href="javascript:void(0)">Like</a>
               <span class="enrolled-span">Liked ${movieLikes}</span>
             </div>
             `;
      const deleteButton = movieDetailsElement.querySelector('a.btn.btn-danger');
      // console.log(userData);
      if (deleteButton.dataset.ownerid !== owner || !userData) {
        deleteButton.style.display = 'none';
      }
      deleteButton.addEventListener('click', async (e) => {
        // console.log(e.target.dataset.id);
        // const userData = JSON.parse(localStorage.getItem('userData'));
        // const owner = userData['id'];

        if (e.target.dataset.ownerid === owner) {
          await del(`/data/movies/${e.target.dataset.id}`);
          showHome();
        }
      });
      const editButton = movieDetailsElement.querySelector('a.btn.btn-warning');
      editButton.onclick = function (e) {
        const editMovieSection = document.querySelector('#edit-movie');
        const editMovieForm = editMovieSection.querySelector('form[class="text-center border border-light p-5"]');

        editMovieForm.onsubmit = onSubmit;

        // Renders navigation bar
        navRender();

        // Hides all views from page
        viewReset();

        const titleEl = editMovieForm.querySelector('input#title');
        titleEl.value = movieDetails.title;
        const descriptionEl = editMovieForm.querySelector('textarea[name="description"]');
        descriptionEl.textContent = movieDetails.description;
        const imgEl = editMovieForm.querySelector('input#imageUrl');
        imgEl.value = movieDetails.img;

        editMovieSection.style.display = 'block';

        async function onSubmit(e) {
          e.preventDefault();
          const formData = new FormData(editMovieForm);
          // console.log(formData);
          let { title, description, img } = Object.fromEntries(formData.entries());
          if (title === '' || description === '' || img === '') {
            return alert('All fields are required!')
          }

          const userData = JSON.parse(localStorage['userData']);
          const token = userData.accessToken;
          // console.log(token);
          const result = await put(`/data/movies/${id}`, { title, description, img });
          // console.log(result);
          editMovieForm.reset();
          descriptionEl.textContent = '';
          targetDetails.click()
        }
      };
      if (editButton.dataset.ownerid !== owner || !userData) {
        editButton.style.display = 'none';
      }
      //////////////////////////////////Like Button and Likes Counter Logic///////////////////////////////////////////
      const likeButton = movieDetailsElement.querySelector('a.btn.btn-primary');
      const likedButton = movieDetailsElement.querySelector('span.enrolled-span');
      // let isLiked = false;
      // console.log(isLiked);
      if (likeButton.dataset.ownerid === owner || !userData) {
        likeButton.style.display = 'none';
      } 
      if (likeButton.dataset.ownerid !== owner && userData) {
        let isLiked = await isLikedCheck();
        if (isLiked) {
          likeButton.style.display = 'none';
        } else {
          likeButton.style.display = '';
        }
      }

      likeButton.onclick = async function (e) {
        let isLiked = await isLikedCheck();
        if (!isLiked && likeButton.dataset.ownerid !== owner) {
          let likesIds = JSON.parse(localStorage['likesIdsArr']);
          localStorage.removeItem('likesIdsArr');
          const result = await post('/data/likes', { 'movieId': movieDetails._id });
          // console.log(result);
          likesIds.push(result['_id']);
          localStorage.likesIdsArr = JSON.stringify(likesIds);
          movieLikes = await get(`/data/likes?where=movieId%3D%22${movieDetails._id}%22&distinct=_ownerId&count`);

          likedButton.textContent = `Liked ${movieLikes}`;
          likeButton.style.display = 'none';
          likedButton.style.display = '';
        }
        // console.log(JSON.parse(localStorage['likesIdsArr']));
      };
       async function isLikedCheck() {
        let isLiked = false;
        let logedInUserLikes = await get(`/data/likes?where=movieId%3D%22${movieDetails._id}%22%20and%20_ownerId%3D%22${owner}%22`);
        // console.log(logedInUserLikes);
        if (logedInUserLikes.legth !== 0) {
          logedInUserLikes = logedInUserLikes.map((userObj) => userObj['_id']);
        }

        if (localStorage['likesIdsArr'] === undefined) {
          const idsArr = [];
          localStorage.likesIdsArr = JSON.stringify(idsArr);
        }
        let likesIds = JSON.parse(localStorage['likesIdsArr']);
        if (logedInUserLikes.legth !== 0 || likesIds.legth !== 0) {
          for (let likes of logedInUserLikes) {
            if (likesIds.includes(likes)) {
              isLiked = true;
              break;
            }
          }
        }
        return isLiked;
      }
    }
  }
}