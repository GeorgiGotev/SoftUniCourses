import { homePage } from "./home.js";
import { updateNavigation } from "./utils.js";

export async function logout() {
    const url = 'http://localhost:3030/users/logout';
    const user = JSON.parse(sessionStorage.getItem('user'))
    const options = {
        method: "GET",
        headers: { "X-Authorization": user.accessToken }
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error("Failed to logout");
        }
        sessionStorage.clear()
        updateNavigation()
        window.location.href = "/"
    } catch (err) {
        alert(err)

    }

    //   fetch(url,options).then(response=> {
    //       if(response.status != 204) {
    //           throw new Error("Failed to logout");
    //       }

    //       sessionStorage.clear();
    //      updateNavigation()
    //      window.location.href="/"
    //   }).catch(err => {
    //       alert(err);
    //   })

}