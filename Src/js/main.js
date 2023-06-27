const hideBtn = document.querySelector('#falcons-btn');
const target = document.querySelector('.falcons');
const standingsBtn = document.querySelector('.stand');
const secondNav = document.querySelector('.second-nav');

hideBtn.addEventListener('click', () => {
    target.classList.toggle('hidden');
})

standingsBtn.addEventListener('click', () => {
  secondNav.classList.toggle('hidden');
})
