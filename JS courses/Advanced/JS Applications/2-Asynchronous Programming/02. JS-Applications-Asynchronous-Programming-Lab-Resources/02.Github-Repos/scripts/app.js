function loadRepos() {
    let usrName = document.getElementById('username');
    let url = `https://api.github.com/users/${usrName.value}/repos`;
    let reposField = document.getElementById('repos');

    async function getPersonRepo() {
    	try{
    		reposField.replaceChildren()

    		let res = await fetch(url);
    		let data = await res.json();

    		data.forEach((element) => {
    			let li = document.createElement('li');
    			let a = document.createElement('a');
    			a.textContent = element.full_name;
    			a.href = element.html_url;

    			li.appendChild(a);
    			reposField.appendChild(li);
    		});
    	}catch(err){
    		err='Not Found!'
			//or alert(err);
			let li = document.createElement('li');
			li.textContent=err;
    		reposField.replaceChildren()
			reposField.appendChild(li)
    	}
    }
	// reposField.replaceChildren()
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         data.map((element) => {
    //             let li = document.createElement('li');
    //             let a = document.createElement('a');
    //             a.textContent = element.full_name;
    //             a.href = element.html_url;

    //             li.appendChild(a);
    //             reposField.appendChild(li);
    //         });
    //     })
	// 	.catch((err)=>{
	// 		err='Not Found';
	// 		alert(err);
	// 		reposField.replaceChild();
	// 	})
		

    usrName.value = '';
    getPersonRepo();
}
