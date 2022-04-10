const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
