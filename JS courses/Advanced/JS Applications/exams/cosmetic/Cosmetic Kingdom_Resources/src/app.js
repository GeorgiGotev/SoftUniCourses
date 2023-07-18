//import pageView's

import { logout } from './api/user.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';


const main = document.getElementById('root');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


//pages

page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

//updateNav
updateNav();

//pageStart
page.start();


//dependance injection to render middleware
function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}



function updateNav(){
    const user=getUserData();
    if(user){
       document.querySelector('nav .user').style.display="inline-block"; 
       document.querySelector('nav .guest').style.display="none"; 
    }else{
        document.querySelector('nav .user').style.display="none"; 
        document.querySelector('nav .guest').style.display="inline-block"; 
    }
}

// render func
function renderMain(content) {
    render(content, main);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}