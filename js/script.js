let doc = document;

let ready = (callback) => {
    if (doc.readyState != 'loading') callback();
    else doc.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
    openNav();
});


function openNav() {
    let burger          = doc.querySelector('.header-burger');
    let nav             = doc.querySelector('.header-nav');
    let checkScrollLock = false;
    let fader           = doc.querySelector('.fader');

    if (burger) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('header-burger_open');
            nav.classList.toggle('header-nav_open');
            fader.classList.toggle('fader_visible');
        });
    }
}

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.top-slider__pagination',
        clickable: true,
    },
});