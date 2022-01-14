let loginBtn = document.querySelector('.login-menu');
let topBtns = document.querySelector('.header__top-btns');
let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');


loginBtn.addEventListener('click', function () {
    topBtns.classList.toggle('header__top-btns--active');
    menu.classList.remove('menu--active');
})

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('menu--active');
    topBtns.classList.remove('header__top-btns--active');
})