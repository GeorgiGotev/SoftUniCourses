import { showView, updateNavigation } from "./utils.js";
import { homePage } from "./home.js";  
const section = document.getElementById("form-sign-up");
const form = section.querySelector('form')
export function registerPage() {
  console.log("...registerPage...");

  showView(section);
}
form.addEventListener('submit', onCheck)
function onCheck(e) {
    e.preventDefault()
    // const formData = new FormData(e.target)
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const rePassword = data.get("repeatPassword");
    
    // Input Validation
    if (email == '' || password.length < 6 || password != rePassword || password == "" || rePassword =="") {
        alert('Incorect email or password!');
        return;
    }
signUp([...data.entries()].reduce((acc, [k,v]) => Object.assign(acc, { [k]: v }), {}))}



export async function signUp(info) {
  const url = 'http://localhost:3030/users/register';
  const body = {
      email: info.email,
      password: info.password
  }

  const options = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(body)
  }
  try{
  
    const response = await fetch(url,options)

    if (response.status == 409){
      throw new Error('User with this email exists')
    }
    const data = await response.json()
    
    sessionStorage.setItem('user',JSON.stringify(data))
    form.reset()
    updateNavigation()
    homePage()
  }catch(err){
   alert(err)

  }

}