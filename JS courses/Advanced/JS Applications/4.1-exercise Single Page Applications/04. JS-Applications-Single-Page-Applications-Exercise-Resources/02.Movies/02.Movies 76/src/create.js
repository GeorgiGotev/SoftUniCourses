import { homePage } from "./home.js"
import { showView } from "./utils.js"
const createSection = document.querySelector('#add-movie')
const form = createSection.querySelector('form')
form.addEventListener('submit', onCheck)
export function createPage() {
    showView(createSection)
}

function onCheck(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    addMovie([...formData.entries()].reduce((app,[k,v])=>Object.assign(app,{[k]:v}),{}));
}


async function addMovie(info){
    console.log(info)
       try{
     const body = JSON.stringify({
     title:info.title,
     description: info.description,
     img:info.img,
     })
     if (info.title == '' || info.description == '' || info.imageUrl == '') {
        throw new Error('Empty input field');
     }
     if(!body){
        throw new Error("No data!!")
     }
     const user = JSON.parse(sessionStorage.getItem('user'))
     if(!user){
        throw new Error("No user permission!!")
     }

     const response = await fetch('http://localhost:3030/data/movies',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        'X-Authorization': user.accessToken 
        },
        body
     })
        if(!response.ok){
            const error = await response.json()
            throw new Error(error.message)
        }
     
        const data = await response.json()

        form.reset()
        homePage()
    }catch(err){
        alert(err.message)
        throw err
    }

}



