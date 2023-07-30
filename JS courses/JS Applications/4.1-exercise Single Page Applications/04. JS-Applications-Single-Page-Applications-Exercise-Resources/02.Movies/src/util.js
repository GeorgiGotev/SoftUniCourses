const views = [...document.querySelectorAll('.view-section')];

function hideAll() {
    views.forEach((v) => (v.style.display = 'none'));
}
export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function updateNav(){
    const user=JSON.parse(localStorage.getItem('user'));
    if(user){
        document.querySelectorAll('.user').forEach(x=>x.style.display='inline-block');
        document.querySelectorAll('.guest').forEach(x=>x.style.display='none');
        document.getElementById('welcome-msg').textContent=`Welcome, ${user.email}`;

    }else{
        document.querySelectorAll('.guest').forEach(x=>x.style.display='inline-block');
        document.querySelectorAll('.user').forEach(x=>x.style.display='none');
    }
}