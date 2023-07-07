// Principles:
// YAGNI => you aren't gonna need it
// KISS => keep it simple, stupid

const views = [...document.querySelectorAll('.view-section')]

function hideAll() {
   views.forEach(x => x.style.display = 'none');
}

export function showView(section) {
   hideAll()
   section.style.display = 'block'

}

export function updateNavigation() {
   let user = JSON.parse(sessionStorage.getItem('user'))
   if (user) {
      document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block')
      document.querySelectorAll('.guest').forEach(e => e.style.display = 'none')
     document.querySelector('#welcome-msg').textContent = `Welcome, ${user.email}`
   } else {
      document.querySelectorAll('.user').forEach(e => e.style.display = 'none')
      document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block')
   }
}
export function showSection(section) {
   views.forEach(v => v.style.display = 'none');
   section.style.display = 'block';
}