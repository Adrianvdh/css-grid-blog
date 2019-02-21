let navButton = document.querySelector('#nav-button');
let navMenu = document.querySelector('.nav-menu');
let navShadow = document.querySelector('#nav-shadow');

navButton.addEventListener('click', function() {
    console.log('button clicked')
    navMenu.classList.add('open');
    navShadow.classList.add('open');
})

navShadow.addEventListener('click', function() {
    navMenu.classList.remove('open');
    navShadow.classList.remove('open');
});