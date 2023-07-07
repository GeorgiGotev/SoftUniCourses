
import { showView, updateNavigation } from "./utils.js"
import { homePage } from "./home.js"

const loginSection = document.querySelector('#form-login')

const form = loginSection.querySelector('form')
export function loginPage() {
    showView(loginSection)
}
form.addEventListener('submit', onCheck)
function onCheck(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
onSubmit([...formData.entries()].reduce((acc, [k,v]) => Object.assign(acc, { [k]: v }), {}))



}


async function onSubmit(info) {

    try {
        if (info.password == "" || info.email == "") {
            throw new Error('Some fields are required!')
        }
        const body = JSON.stringify({
            password: info.password,
            email: info.email,
        })


        const response = await fetch("http://localhost:3030/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
        if (response.status!=200) {
            const error = await response.json()
            throw new Error(error.message)
        }
        const userData = await response.json()
   
        sessionStorage.setItem('user', JSON.stringify(userData))

      form.reset()
        updateNavigation()
        homePage()
    } catch (err) {
        alert(err.message)
        throw err
    }

}